import {
    connect
} from 'react-redux';
import axios from 'axios';

import LoginForm from '../components/LoginForm';
import { actionLogin } from '../actions';

function mapStateToProps(state) {
    console.log(state.user)
    return {
        loginStatus: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (UserLogin) => {
            console.log(UserLogin)
            const login = await axios({
                method: 'post',
                url: "/api/login",
                data: {
                    email: UserLogin.email,
                    password: UserLogin.password
                }
            }).then( resp => {
                return resp.data;
            });
            console.log(login);
        if (login.success) {
            dispatch(actionLogin(true))
        }
        }
    }
}



const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(LoginForm);