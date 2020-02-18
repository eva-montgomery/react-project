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
           const results = await Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`)
           console.log(results);
            dispatch(actionSearch('sunflowers'));
            dispatch(actionResults(results.data.objectIDs));
            dispatch(actionLoading(false));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WineSearch);
