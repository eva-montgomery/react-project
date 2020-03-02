
import {
    connect
} from 'react-redux';

import WineList from '../components/WineList';
import { actionDelWine } from '../actions';

import axios from 'axios';

function mapStateToProps(state) {
    return {
        winelist: state
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
                    wine_name: allWines.wine_name,
                    wine_type: allWines.wine_type,
                    wine_price: allWines.wine_price,
                    wine_store: allWines.wine_store,
                    wine_label: allWines.wine_label,
                    comments: allWines.comments,
                    wine_rating: allWines.wine_rating
                }
            }).then( resp => {
                return resp.data;
            });
            if (allWines.success) {
                dispatch(actionDelWine(winelist, index))

            } 
        }
    }
}





const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineList);