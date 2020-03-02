import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: this.props.isLoggedIn
        }
    }

    componentDidMount() {
        this.props.handleLogout()
        this.setState({
            loggedIn : this.props.isLoggedIn
        })
        console.log(this.state)
    }
    
    render() {
        return ( 
            
            <div>
    {!this.state.isLoggedIn && <Redirect to ="/"/>} 
            </div>
        )
    } 
}

