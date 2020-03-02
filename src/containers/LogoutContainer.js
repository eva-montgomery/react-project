import {
    connect
} from 'react-redux';
import axios from 'axios';
import Logout from '../components/Logout';
import { actionLogout } from '../actions';

function mapStateToProps(state) {
    console.log(state.user)
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleLogout: async (logout) => {
            const logoutUser = await axios({
                method: 'get',
                url: '/api/logout'
            }).then( resp => {
                return resp.data;
            })
            console.log(logoutUser)
            if (logoutUser.isLoggedOut) {
                dispatch(actionLogout())
            }
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Logout);
 