import React from 'react';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        };
    }
    render() {
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
                <input type="submit" value="Sign in" className="login-submit" />
                </form>
            </div>
            </div>    
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleSubmit(this.state);
        this.setState({
            email: '',
            password: ''
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
}