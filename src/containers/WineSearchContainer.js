import {
    connect
} from 'react-redux';

import WineSearch from '../components/WineSearch';
import { 
    actionSearch,
    actionResults,
    actionLoading,
} from '../actions';
import Axios from 'axios';




function mapDispatchToProps(dispatch) {
    return {
        handleClick: async (query) => {
            dispatch(actionLoading(true));
           const results = await Axios.get(`https://api.globalwinescore.com/globalwinescores/latest/`, {
               headers: {
                Authorization: "Token 17cfc1a827957c96b7b2284ab656b740a90e358c"
               }
           })
           console.log(results);
            dispatch(actionSearch('sunflowers'));
            dispatch(actionResults(results.data.objectIDs));
            dispatch(actionLoading(false));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WineSearch);


// api to list all types from a country which I can tick off after I have tried them