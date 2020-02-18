import {
    connect
} from 'react-redux';

import WineForm from '../components/WineForm';
import { actionAddWine } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newWine) => {
            dispatch(actionAddWine(newWine))
        }
    }
}



const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WineForm);