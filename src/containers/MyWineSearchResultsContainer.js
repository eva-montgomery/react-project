
import {
    connect
} from 'react-redux';

import MyWineSearchResults from '../components/MyWineSearchResults';


function mapStateToProps(state) {
    return {
        wineSearchResults: state.wineSearch.results
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(MyWineSearchResults);