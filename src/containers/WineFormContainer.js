import {
    connect
} from 'react-redux';
import axios from 'axios';



import WineForm from '../components/WineForm';
import { actionAddWine, getPersonalWines } from '../actions';
 
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
            let blob = await fetch(NewWine.label).then(r => r.blob());
            let formData = new FormData();
            formData.append('wine_label', blob);
            formData.append('wine_name', NewWine.wine);
            formData.append('wine_type', NewWine.type);
            formData.append('wine_price', NewWine.price);
            formData.append('wine_store', NewWine.shop);
            formData.append('comments', NewWine.comment);
            formData.append('wine_rating', NewWine.rating);

            console.log(blob)
            



            const addNewWine = await axios({
                method: 'post',
                url: "/api/wines/create",
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                data: formData,  
                // body: imageData,  
                // data: {
                //     wine_name: NewWine.wine,
                //     wine_type: NewWine.type,
                //     wine_price: NewWine.price,
                //     wine_store: NewWine.store,
                //     // wine_label: NewWine.label,
                //     comments: NewWine.comment,
                //     wine_rating: NewWine.rating
                // }
            }).then( resp => {
                return resp.data;
            });
            if (addNewWine.success) {
                // dispatch(actionAddWine(NewWine))
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
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineForm);