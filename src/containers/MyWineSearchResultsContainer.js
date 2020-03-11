
import {
    connect
} from 'react-redux';
import Axios from 'axios';

import MyWineSearchResults from '../components/MyWineSearchResults';
import { actionDelWine, actionResults} from '../actions';


function mapStateToProps(state) {
    return {
        myWineSearchResults: state.wineSearch.results
    }
}


function mapDispatchToProps(dispatch) {
    return {
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
        handleClearResults: () => {
            dispatch(actionResults([]));

        }
    }
}
const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(MyWineSearchResults);



