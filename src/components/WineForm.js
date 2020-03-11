import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
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
            rating: 5,

        };
    }
    render() {
        return (
            <div>
            <div className="main-content">
          <h3>Hi Wine-Lover 🍷</h3>
          <br></br>
        <p>Welcome to Wine-O-Clock - your personal wine rating application!</p> 
       
        <p>Add the wines you bought to the form below and give them a wine-rating from 1-5, so every time you buy wine, you can look in your app and check if you have already tried it!
        <p>To view all rated wines by all users, you can simply click 
        <a href="/wines"> here</a> See a wine you want to try? Add it to your favorites list.</p>
        </p>
        <h4>And remember: It's Wine-O-Clock somewhere and life is too short to drink shitty wine! Cheers!</h4>
        <p>💜 Please donate an amount of what you saved by only buying good wine to an animal rescue 💜
        </p>
      
      </div>
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
                    /> <br></br>

                   <label for="wine-input">Upload Wine Label:</label>
                   <br></br><input type="file" className="wine-input-label" 
                       accept="image/png, image/jpeg, image/jpg"
                     onChange={this._handleLabel}
                    // value={this.state.label} 
                    />   
                <input className="wine-input"
                     onChange={this._handleComment}
                    value={this.state.comment} placeholder="Comments"
                    />  

                <WineRating className="wine-glasses" onChange={this._handleRating}/>

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
