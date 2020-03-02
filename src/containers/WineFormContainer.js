import {
    connect
} from 'react-redux';
import axios from 'axios';



import WineForm from '../components/WineForm';
import { actionAddWine } from '../actions';
 
axios.defaults.withCredentials = true;

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
                    wine_name: NewWine.wine,
                    wine_type: NewWine.type,
                    wine_price: NewWine.price,
                    wine_store: NewWine.store,
                    wine_label: NewWine.label,
                    comments: NewWine.comment,
                    wine_rating: NewWine.rating
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