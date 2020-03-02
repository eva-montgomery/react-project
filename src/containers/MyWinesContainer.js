
import {
    connect
} from 'react-redux';

import MyWines from '../components/MyWines';
import { actionDelWine } from '../actions';

import axios from 'axios';

function mapStateToProps(state) {
    return {
        winelist: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleDel: (winelist, index) => {
            dispatch(actionDelWine(winelist, index))
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(MyWines);