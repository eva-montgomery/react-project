import {
    connect
} from 'react-redux';

import Profile from '../components/Profile';
import { actionProfile } from '../actions';

import axios from 'axios';
axios.defaults.withCredentials = true;





function mapStateToProps(state) {
    const getProfile = async () => {

    const myProfileInfo = await axios ({
        method:'get',
        url: '/api/profile'
    }).then( resp => {
        console.log(resp)
        return resp.data;
    });
    return myProfileInfo
    }
    return {
        profile: getProfile
    }
}



// function mapDispatchToProps(dispatch) {
//     return {
//         handleProfile: (profile) => {
//             dispatch(actionProfile(profile))
//         }
//     }
// }

// function mapStateToProps(state) {
//     return {
//         profile: state
//     }
// }


function mapDispatchToProps(dispatch) {
    return {
        handleProfile: async (profile) => {
            const userProfile = await axios ({
                method: 'post',
                url: '/api/profile',
                data: { 
                    email: profile.email,
                    password: profile.password,
                    first_name: profile.first_name,
                    last_name: profile.last_name
                }
            }).then ( resp => {
                return resp.data;
            })
            if (profile.success) {
                dispatch(actionProfile(profile))

            }
        }
     }
}


const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Profile);