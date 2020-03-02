
import {
    connect
} from 'react-redux';

import MyFavoriteWines from '../components/MyFavoriteWinesList';
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
export default reduxConnector(MyFavoriteWines);