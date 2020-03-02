
import React from 'react';

// Display Profile Information

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // profileInformation: this.props.profileInformation.profile
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
    }
render() {
    return (
    <div>
<div className="profile-information">My profile information:</div>
{/* { 
this.props.profileInformation.profile.map( (m, i) => (
    <ul>
         <li key={i}>E-Mail: {m.email}</li>
         <li key={i}>Password: {m.password}</li>
         <li key={i}>First Name: {m.first_name}</li>
         <li key={i}>Last Name: {m.last_name}</li>


    </ul>
))} */}

     </div>
    )



    
}

_handleProfile = (event) => {
    this.setState({
        profile: event.target.value
    });
}             
}