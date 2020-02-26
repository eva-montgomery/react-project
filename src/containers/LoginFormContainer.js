import {
    connect
} from 'react-redux';

import LoginForm from '../components/LoginForm';
import { actionLogin } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (UserLogin) => {
            dispatch(actionLogin(UserLogin))
        }
    }
}



const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(LoginForm);