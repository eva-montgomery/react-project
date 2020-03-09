import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import WineRating from '../WineRating'

export default class EditWineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            wine: '',
            type: '',
            price: '',
            shop: '',
            label: '',
            comment: '',
            rating: 5,

        };
    }

    componentDidMount() {
        if (typeof this.props.location.params === 'object') {
            const {
            wineId, 
            wine_name,
            wine_type, 
            wine_price,
            wine_store,
            comments,
            wine_label,
            wine_rating} = this.props.location.params
            this.setState({
                id: wineId,
                wine: wine_name,
                type: wine_type,
                price: wine_price,
                shop: wine_store,
                label: wine_label,
                comment: comments,
                label: wine_label,
                rating: wine_rating
            })
        }
    }
 
    render() {
        console.log(this.props)
        console.log(typeof this.props.location.params)
        if (typeof this.props.location.params === 'object') {
            const {        
            wine,
            type,
            price,
            shop,
            label,
            comment,
            rating} = this.state
            console.log(this.props.location.params)
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
                                value={`${wine}`} placeholder="Wine"
                                 /> 
                                 <input className="wine-input"
                                onChange={this._handleType}
                                value={`${type}`} placeholder="Type"
                                />     
                                <input className="wine-input"
                                onChange={this._handlePrice}
                                value={`${price}`} placeholder="Price"
                                />  
                                <input className="wine-input"
                                onChange={this._handleShop}
                                value={`${shop}`} placeholder="Bought at"
                                /> <br></br>

                                <label for="wine-input">Upload Wine Label:</label>
                                <br></br><input type="file" className="wine-input-label" 
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={this._handleLabel}
                                // value={`${wine_label}`}
                                />  
                                <img src={`/images/${label}`} alt="wine label" className="label-container"/>
                                <input className="wine-input"
                                onChange={this._handleComment}
                                value={`${comment}`} placeholder="Comments"
                                />   

                                <WineRating className="wine-glasses" onChange={this._handleRating} value={`${rating}`}/>

                                <input type="submit" value="Update" className="wine-submit" />
                            </form>

                        </div>
                     </div>
                 </div>
            )
        } else {
            return <Redirect to = "/home" />
        }
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.label)
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
