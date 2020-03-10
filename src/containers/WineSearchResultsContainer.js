
import {
    connect
} from 'react-redux';

import WineSearchResults from '../components/WineSearchResults';
import { actionDelWine, actionResults } from '../actions';

function mapStateToProps(state) {
    return {
        wineSearchResults: state.wineSearch.results
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleDel: (winelist, index) => {
            dispatch(actionDelWine(winelist, index))
        },
        handleClearResults: () => {
            dispatch(actionResults([]));

        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(WineSearchResults);
