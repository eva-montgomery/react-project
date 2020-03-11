import {
    connect
} from 'react-redux';

import MyWineSearch from '../components/MyWineSearch';

import { 
    actionMySearch,
    actionMyResults,
    actionMyLoading,
    actionDelWine
    
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
            url: "/api/mysearch",
            data: {
              searchText: query

           }})
        
           console.log(results);
           console.log(results.data.results)
            dispatch(actionMyResults(results.data.wineSearch));
            // dispatch(actionLoading(false));
        },
        
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(MyWineSearch);


