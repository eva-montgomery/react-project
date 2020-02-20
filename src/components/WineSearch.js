  
import React from 'react';

// export default function WineSearch({
//     handleClick
// }) {
//     return (

//         <button onClick={handleClick} className="wine-search-btn">Search for wines online</button>
//     )
// }

export default class WineSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <div>
            <div className="wine-search-container">
                 <div className="wine-search-box">
             <div className="wine-search-text">Search for wines</div>
                <form onSubmit={this._handleSubmit} >
                    <input
                        className="wine-input"
                        value={this.state.text}
                        onChange={this._handleChange} 
                    />
                     <button className="wine-search-btn">Search for wines online</button>
                </form>
                </div>
                </div>
                </div>
         
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.text)
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



