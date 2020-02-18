import React from 'react';

export default class WineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <div> 
                <form onSubmit={this._handleSubmit}>

                <input 
                     onChange={this._handleChange}
                    value={this.state.text}
                    /> 
                    <input type="submit" value="Search!" />
                </form>

            </div>
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.text);
        this.setState({
            text: ''
        })
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
}
