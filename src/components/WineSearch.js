  
import React from 'react';
import Axios from 'axios';


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
            text: '',
            wineSearchResults: []
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
    _handleSubmit = async (event) => {
        event.preventDefault();
        // this.props.handleSubmit(this.state.text)
        console.log(this.state.text)
      
        const results = await Axios.get(`https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=${this.state.text}`, {
            headers: {
             Authorization: "Token 17cfc1a827957c96b7b2284ab656b740a90e358c",
             'X-Requested-With': 'XMLHttpRequest' 
            }
        })
        console.log(results);
        console.log(results.data.results)
        console.log(this.state.wineSearchResults)
        this.setState({
            text: '',
            wineSearchResults: results.data.results
        })
        console.log(this.state.wineSearchResults)
    }
    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
}



