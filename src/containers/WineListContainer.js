
import {
    connect
} from 'react-redux';

import WineList from '../components/WineList';


function mapStateToProps(state) {
    return {
        wines: state
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(WineList);