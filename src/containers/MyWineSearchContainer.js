import {
    connect
} from 'react-redux';

import MyWineSearch from '../components/MyWineSearch';

import { 
    actionSearch,
    actionResults,
    actionLoading,
} from '../actions';

import Axios from 'axios';




function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (query) => {
            // dispatch(actionLoading(true));
            console.log(query)
            
           const results = await Axios({
            method: 'post',
            url: "/api/mysearch",
            data: {
              searchText: query

           }})
        
           console.log(results);
           console.log(results.data.results)
            dispatch(actionResults(results.data.results));
            // dispatch(actionLoading(false));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(MyWineSearch);


// api to list all types from a country which I can tick off after I have tried them