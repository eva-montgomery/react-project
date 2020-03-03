
import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import axios from 'axios';
axios.defaults.withCredentials = true;
// Display Profile Information

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        };
    }

    async componentDidMount() {
        const myProfileInfo = await axios ({
            method:'get',
            url: '/api/profile'
    
        }).then( resp => {
            return resp.data;
        });
    this.setState({
        profile: myProfileInfo.profile
    })
    }
    // _handleProfile = (event) => {
    //     this.setState({
    //         profile: event.target.value
    //     });
    // }   
render() {
    return (
    <div>
<div className="profile-information">My profile information:</div>
{/* { 
this.state.profile.map( (m, i) => (
    <ul>
         <li key={i}>E-Mail: {m.email}</li>
         <li key={i}>Password: {m.password}</li>
         <li key={i}>First Name: {m.first_name}</li>
         <li key={i}>Last Name: {m.last_name}</li>


    </ul>
))} */}
{/* {!this.state.isLoggedIn && <Redirect to ="/"/>}  */}

     </div>
    )    
}     
}