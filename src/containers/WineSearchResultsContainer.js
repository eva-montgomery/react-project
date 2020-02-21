
import {
    connect
} from 'react-redux';

import WineSearchResults from '../components/WineSearchResults';


function mapStateToProps(state) {
    return {
        wineSearchResults: state.wineSearch.results
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(WineSearchResults);
