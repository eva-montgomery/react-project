import {
    connect
} from 'react-redux';
import axios from 'axios';

import Profile from '../components/Profile';
import { actionProfile } from '../actions';


function mapStateToProps(state) {
    return {
        profile: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleProfile: async (ProfileInfo) => {
            const userProfile = await axios ({
                method: 'post',
                url: '/api/profile',
                data: { 
                    email: ProfileInfo.email,
                    password: ProfileInfo.password,
                    first_name: ProfileInfo.first_name,
                    last_name: ProfileInfo.last_name
                }
            }).then ( resp => {
                return resp.data;
            })
            if (userProfile.success) {
                dispatch(actionProfile())

            }

        }
        }
}


const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Profile);