
import {
    connect
} from 'react-redux';
import Axios from 'axios';

import WineSearchResults from '../components/WineSearchResults';
import { actionDelWine, actionResults, getPersonalWines } from '../actions';

function mapStateToProps(state) {
    return {
        wineSearchResults: state.wineSearch.results
    }
}


function mapDispatchToProps(dispatch) {
    return {
        // _handleDel: (winelist, index) => {
        //     dispatch(actionDelWine(winelist, index))
        // },
        handleDel: async (winelist, wineId, index) => {
            console.log(winelist, wineId, index)
            const deleted = await Axios({
                method: 'post',
                url: "/api/delete",
                data: {
                    wine_id: wineId
                }
            }).then( resp => {
                return resp.data;
            });
            console.log(deleted.deletedWine)
            if (deleted.deletedWine) {
                dispatch(actionDelWine(winelist, index))
            } 
        },
        handleFavorite: async (event, wineId) => {
            const favorites = await Axios({
                method: 'post',
                url: "/api/addtofavorites",
                data: {
                    wine_id: wineId
                }
            }).then( resp => {
                return resp.data;
            });
            console.log(favorites)
        },
    
        handleClearResults: () => {
            dispatch(actionResults([]));

        }
    }
    }


const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineSearchResults);
