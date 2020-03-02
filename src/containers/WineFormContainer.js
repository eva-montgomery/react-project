import {
    connect
} from 'react-redux';
import axios from 'axios';


import WineForm from '../components/WineForm';
import { actionAddWine } from '../actions';
 


function mapStateToProps(state) {
    return {
        newWines: state.wines
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         handleSubmit: (newWine) => {
//             dispatch(actionAddWine(newWine))
//         }
//     }
// }



function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (NewWine) => {
            console.log(NewWine)
            const addNewWine = await axios({
                method: 'post',
                url: "/api/wines/create",
                data: {
                    wine_name: NewWine.wine_name,
                    wine_type: NewWine.wine_type,
                    wine_price: NewWine.wine_price,
                    wine_store: NewWine.wine_store,
                    wine_label: NewWine.wine_label,
                    comments: NewWine.comments,
                    wine_rating: NewWine.wine_rating
                }
            }).then( resp => {
                return resp.data;
            });
            if (addNewWine.success) {
                dispatch(actionAddWine(NewWine))
            }
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineForm);