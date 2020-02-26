import {
    connect
} from 'react-redux';

import SignUpForm from '../components/SignUpForm';
import { actionSignup } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (UserSignUp) => {
            dispatch(actionSignup(UserSignUp))
        }
    }
}



const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(SignUpForm);