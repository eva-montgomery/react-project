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
            comments: '',
            rating: '',

        };
    }
    render() {
        return (
            <div> 
                <form onSubmit={this._handleSubmit}>

                <input 
                     onChange={this._handleWine}
                    value={this.state.wine} placeholder="Wine"
                    /> 
                <input 
                     onChange={this._handleType}
                    value={this.state.type} placeholder="Type"
                    />     

                <input 
                     onChange={this._handlePrice}
                    value={this.state.price} placeholder="Price"
                    />  
                <input 
                     onChange={this._handleShop}
                    value={this.state.shop} placeholder="Bought at"
                    />  
                <input 
                     onChange={this._handleLabel}
                    value={this.state.label} placeholder="Wine Label"
                    />  

                <input 
                     onChange={this._handleComment}
                    value={this.state.comment} placeholder="Comments"
                    />  

                <WineRating onChange={this._handleRating}/>

                    <input type="submit" value="Add a new wine" />

                </form>

            </div>
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
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
