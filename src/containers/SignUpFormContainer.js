import {
    connect
} from 'react-redux';

import axios from 'axios';
import SignUpForm from '../components/SignUpForm';
import { actionSignup, actionUserTaken } from '../actions';

function mapStateToProps(state) {
    return {
        signUpStatus: state.user.didSignup,
        isUserTaken: state.user.isUserTaken
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (UserSignUp) => {
            console.log(UserSignUp)
            const signup = await axios({
                method: 'post',
                url: "/api/signup",
                data: {
                    email: UserSignUp.email,
                    password: UserSignUp.password,
                    first_name: UserSignUp.first_name,
                    last_name: UserSignUp.last_name
                }
            }).then( resp => {
                return resp.data;
            });
            console.log(signup);
            if (signup.success) {
                dispatch(actionSignup(true))
            } 
            if (signup.user_taken) {
                dispatch(actionUserTaken(true))
            }
        }
    }
}


const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(SignUpForm);