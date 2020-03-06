import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import WineRating from '../WineRating'

export default class EditWineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wine: '',
            type: '',
            price: '',
            shop: '',
            label: '',
            comment: '',
            rating: 5,

        };
    }
    render() {
        return (
            <div>
            <div className="main-content">
          <h3>Edit your wine here 🍷</h3>
          <br></br>
        <p>Made a mistake? Changed your mind about a certain Wine?</p> 
       
        <p>No problem! Update your Wine right here!</p>
      
      </div>
            <div className="wine-form-container">
            <div className="wine-box"> 
                <form onSubmit={this._handleSubmit}>
        
                <input className="wine-input"
                     onChange={this._handleWine}
                    value="${wine_name}" placeholder="Wine"
                    /> 
                <input className="wine-input"
                     onChange={this._handleType}
                    value="${wine_type}" placeholder="Type"
                    />     

                <input className="wine-input"
                     onChange={this._handlePrice}
                    value="${wine_price}" placeholder="Price"
                    />  
                <input className="wine-input"
                     onChange={this._handleShop}
                    value="${wine_store}" placeholder="Bought at"
                    /> <br></br>

                   <label for="wine-input">Upload Wine Label:</label>
                   <br></br><input type="file" className="wine-input-label" 
                       accept="image/png, image/jpeg, image/jpg"
                     onChange={this._handleLabel}
                    value="${wine_label}"
                    />   
                <input className="wine-input"
                     onChange={this._handleComment}
                    value="${comments}" placeholder="Comments"
                    />  

                <WineRating className="wine-glasses" onChange={this._handleRating} value="${wine_rating}"/>

                    <input type="submit" value="Add a new wine" className="wine-submit" />
                    

                </form>
                {this.props.loginStatus.isLoggedIn == false ? <Redirect to ="/"/> : ""}   

            </div>
            </div>
            </div>
        )
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleSubmit(this.state);
        this.setState({
                wine: '',
                type: '',
                price: '',
                shop: '',
                label: '',
                comment: '',
                rating: 5})
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
            // label: event.target.value
            label: URL.createObjectURL(event.target.files[0])
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
