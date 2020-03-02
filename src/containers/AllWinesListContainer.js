
import {
    connect
} from 'react-redux';

import AllWinesList from '../components/AllWinesList';
import { actionDelWine } from '../actions';


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
export default reduxConnector(AllWinesList);