
import {
    connect
} from 'react-redux';

import MyFavoriteWines from '../components/MyFavoriteWinesList';
import { actionDelWine } from '../actions';


import axios from 'axios';
axios.defaults.withCredentials = true;

function mapStateToProps(state) {

    const getFavWines = async () => {
        const myFavWines = await axios({
            method: 'get',
            url: '/api/favorites'
        }).then( resp => {
            console.log(resp)
            return resp.data;
        });
        return myFavWines
    }
    
    return {
        winelist: getFavWines,
        loginStatus: state.user
    }   
}

function mapDispatchToProps(dispatch) {
    return {
        handleDel: async (winelist, wineId, index) => {
            const deleted = await axios({
                method: 'post',
                url: "/api/deletefavwine",
                data: {
                    wine_id: wineId
                }
            }).then( resp => {
                return resp.data;
            });
            console.log(deleted.deletedWine)
            if (deleted.deletedWine) {
                dispatch(actionDelWine(winelist, wineId, index))

            } 
        },


    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(MyFavoriteWines);