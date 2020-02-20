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
            // const result = await Axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${query}"`, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
           const results = await Axios.get(`https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/`, {
               headers: {
                Authorization: "Token 17cfc1a827957c96b7b2284ab656b740a90e358c",
                'X-Requested-With': 'XMLHttpRequest' 
               }
           })
           console.log(results);
            dispatch(actionSearch('cabernet'));
            dispatch(actionResults(results.data.objectIDs));
            dispatch(actionLoading(false));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WineSearch);


// api to list all types from a country which I can tick off after I have tried them