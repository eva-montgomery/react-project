
import {
    connect
} from 'react-redux';

import WineSearchResults from '../components/WineSearchResults';


function mapStateToProps(state) {
    return {
        wines: state
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(WineSearchResults);
