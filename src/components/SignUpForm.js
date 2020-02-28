import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
    }
    render() {
        console.log(this.props)
        return (
            <div className="login-form-container">
            <div className="login-box"> 
                <form onSubmit={this._handleSubmit}>

                <input className="login-input"
                     onChange={this._handleEmail}
                    value={this.state.email} placeholder="E-Mail"
                    />     
                <input type="password" className="login-input"
                     onChange={this._handlePassword}
                    value={this.state.password} placeholder="Password"
                    />    
               <input className="login-input"
                     onChange={this._handleFirstName}
                    value={this.state.first_name} placeholder="First Name"
                    />   
               <input className="login-input"
                     onChange={this._handleLastName}
                    value={this.state.last_name} placeholder="Last Name"
                    />          <br></br> <br></br>                                    
                <input type="submit" value="Sign Up" className="login-submit" /> 
                <br></br> <br></br>
              <div>Already have an account? <a href="/login" id="login">Login here</a></div>
              {this.props.isUserTaken && <div>User Taken</div>}

                </form>
            </div>
            {this.props.signUpStatus && <Redirect to ="/home"/>}   
        
            </div>    
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleSubmit(this.state);
        this.setState({
            email: '',
            password: '',
            first_name: '',
            last_name: ''
            })
    }

    _handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    } 
    _handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }     
    _handleFirstName = (event) => {
        this.setState({
            first_name: event.target.value
        });
    }   
    _handleLastName = (event) => {
        this.setState({
            last_name: event.target.value
        });
    }               
}