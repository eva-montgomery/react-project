  
import React from 'react';
import Axios from 'axios';
import WineSearchResults from '../containers/WineSearchResultsContainer'


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
            wineSearchResults: [],
            
        };
    }
    render() {
        let {wineSearchResults} = this.state
        return (
            <div>
                <div className="wine-search-container">
                    <div className="wine-search-box">
                        <form onSubmit={this._handleSubmit} >
                            <input
                                className="wine-input"
                                value={this.state.text}
                                placeholder="Search"
                                 onChange={this._handleChange} 
                             />
                        <button className="wine-search-btn">Search</button>

                        </form>
                    </div>
                </div>
                    <table>
                    
                    <tbody>
                    <WineSearchResults/> 
                    </tbody>
                    
                    
                    
                    </table>
            </div>
         
        )
    }
    _handleSubmit = async (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.text)
        console.log(this.state.text)
      
        
        this.setState({
            text: '',
        })
        // console.log(this.state.wineSearchResults)
    }
    _handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }
}

