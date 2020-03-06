
import {
    connect
} from 'react-redux';

import MyFavoriteWines from '../components/MyFavoriteWinesList';
import { actionDelWine } from '../actions';


import axios from 'axios';
axios.defaults.withCredentials = true;


// function mapStateToProps(state) {
//     return {
//         winelist: state
//     }
// }

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
        //     console.log(winelist, index)
        //     const favWines = await axios({
        //         method: 'post',
        //         url: "/api/favorites/",
        //         data: {
        //             wine_name: winelist.wine_name,
        //             wine_type: winelist.wine_type,
        //             wine_price: winelist.wine_price,
        //             wine_store: winelist.wine_store,
        //             wine_label: winelist.wine_label,
        //             comments: winelist.comments,
        //             wine_rating: winelist.wine_rating
        //         }
        //     }).then( resp => {
        //         return resp.data;
        //     });
        //     if (winelist.success) {
        //         dispatch(actionDelWine(winelist, index))

        //     } 
        // }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(MyFavoriteWines);