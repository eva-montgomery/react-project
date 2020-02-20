import React from 'react';
import WineRating from '../WineRating'

export default class WineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wine: '',
            type: '',
            price: '',
            shop: '',
            label: '',
            comment: '',
            rating: '',

        };
    }
    render() {
        return (
            <div className="wine-form-container">
            <div className="wine-box"> 
                <form onSubmit={this._handleSubmit}>
        
                <input className="wine-input"
                     onChange={this._handleWine}
                    value={this.state.wine} placeholder="Wine"
                    /> 
                <input className="wine-input"
                     onChange={this._handleType}
                    value={this.state.type} placeholder="Type"
                    />     

                <input className="wine-input"
                     onChange={this._handlePrice}
                    value={this.state.price} placeholder="Price"
                    />  
                <input className="wine-input"
                     onChange={this._handleShop}
                    value={this.state.shop} placeholder="Bought at"
                    />  
                <input className="wine-input"
                     onChange={this._handleLabel}
                    value={this.state.label} placeholder="Wine Label"
                    />  

                <input className="wine-input"
                     onChange={this._handleComment}
                    value={this.state.comment} placeholder="Comments"
                    />  

                <WineRating className="wine-glasses" onChange={this._handleRating}/>

                    <input type="submit" value="Add a new wine" className="wine-submit" />
                    

                </form>

            </div>
            </div>
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({
                wine: '',
                type: '',
                price: '',
                shop: '',
                label: '',
                comment: '',
                rating: '',})
    }

     
    _handleWine = (event) => {
        this.setState({
            wine: event.target.value
        });
    }
    _handleType = (event) => {
        this.setState({
            type: event.target.value
        });       
    }
    _handlePrice = (event) => {
        this.setState({
            price: event.target.value
        });
    }
    _handleShop = (event) => {
        this.setState({
            shop: event.target.value
        });
    }    
    _handleLabel = (event) => {
        this.setState({
            label: event.target.value
        });
    }     
    
    _handleRating = (rating) => {
        this.setState({
            rating
        });
    }        

    _handleComment = (event) => {
        this.setState({
            comment: event.target.value
        });
    }        
}
