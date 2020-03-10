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


function mapStateToProps(state) {
    return {
        winelist: state,
    }   
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (query) => {
            // dispatch(actionLoading(true));
            console.log(query)
            
           const results = await Axios({
            method: 'post',
            url: "/api/search",
            data: {
              searchText: query

           }})
        
           console.log(results);
           console.log(results.data.results)
            dispatch(actionResults(results.data.wineSearch));
            // dispatch(actionLoading(false));
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineSearch);


// api to list all types from a country which I can tick off after I have tried them