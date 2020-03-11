  
import React from 'react';
import Axios from 'axios';
import MyWineSearchResults from '../containers/MyWineSearchResultsContainer'


export default class MyWineSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            myWineSearchResults: [],
            
        };
    }

    
    render() {
        let {myWineSearchResults} = this.state
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
                    
                    <MyWineSearchResults
                    doSearch={this._handleSubmit}
                    /> 
            
            </div>
         
        )
    }
    _handleSubmit = async (event) => {
        event && event.preventDefault();
        this.props.handleSubmit(this.state.text)
        console.log(this.state.text)
      
        

        // console.log(this.state.wineSearchResults)
    }
    _handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }
}

