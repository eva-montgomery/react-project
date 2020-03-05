
import {
    connect
} from 'react-redux';

import WineList from '../components/WineList';
import { actionDelWine, getPersonalWines } from '../actions';

import axios from 'axios';
axios.defaults.withCredentials = true;

function mapStateToProps(state) {
    console.log(state)


    return {
        winelist: state,

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
        handleDel: async (winelist, wineId, index) => {
            const deleted = await axios({
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
                dispatch(actionDelWine(winelist, wineId, index))

            } 
        },
         getWines: async () => {
            const myWines = await axios({
                method: 'get',
                url: '/api/mywines'
            }).then( resp => {
                console.log(resp)
                return resp.data.wineList;
            });
            if (myWines.length > 0) {
                console.log('calling dispatch')
                dispatch(getPersonalWines(myWines))
            }
        }
    
    }
}





const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineList);