import {
    connect
} from 'react-redux';
import axios from 'axios';

import LoginForm from '../components/LoginForm';
import { actionLogin } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: async (UserLogin) => {
            console.log(UserLogin)
            const login = await axios({
                method: 'post',
                url: "/api/login",
                data: {
                    email: "testuser@test.com",
                    password: "1234"
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



const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(LoginForm);