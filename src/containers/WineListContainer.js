
import {
    connect
} from 'react-redux';

import WineList from '../components/WineList';
import { actionDelWine } from '../actions';

import axios from 'axios';
axios.defaults.withCredentials = true;

function mapStateToProps(state) {

    const getWines = async () => {
        const myWines = await axios({
            method: 'get',
            url: '/api/mywines'
        }).then( resp => {
            console.log(resp)
            return resp.data;
        });
        return myWines
    }
    


    return {
        winelist: getWines
    }   
}


// function mapDispatchToProps(dispatch) {
//     return {
//         handleDel: (winelist, index) => {
//             dispatch(actionDelWine(winelist, index))
//         }
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        handleDel: async (winelist, index) => {
            console.log(winelist, index)
            const allWines = await axios({
                method: 'post',
                url: "/api/wines/",
                data: {
                    wine_name: winelist.wine_name,
                    wine_type: winelist.wine_type,
                    wine_price: winelist.wine_price,
                    wine_store: winelist.wine_store,
                    wine_label: winelist.wine_label,
                    comments: winelist.comments,
                    wine_rating: winelist.wine_rating
                }
            }).then( resp => {
                return resp.data;
            });
            if (winelist.success) {
                dispatch(actionDelWine(winelist, index))

            } 
        }
    }
}





const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineList);