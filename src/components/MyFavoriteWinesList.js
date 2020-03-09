import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import StarRatingComponent from 'react-star-rating-component';
import { actionDelWine, getPersonalWines } from '../actions';

import axios from 'axios';
axios.defaults.withCredentials = true;

 

export default class MyFavoriteWines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winelist: []
        }
    }
    async componentDidMount() {
        const myFavorites = await axios ({
            method:'get',
            url: '/api/favorites'
    
        }).then( resp => {
            return resp.data;
        });
    this.setState({
        winelist: myFavorites.wineList
    })
    }

    _handleDel= (event, wineId, index) => {
        event.preventDefault();
        this.props.handleDel(this.props.winelist.wines, wineId, index);

        // this.props.handleDel(this.props.winelist, index);
    }
    render() {
        console.log(this.props)
        console.log(this.state.winelist)
        // if (this.props.winelist.length === 0) { 
        //     return <div> <div className="rated-wines-title">You have not added any wines to your favorites yet</div>
        //     <p>Click here to view all rated wines and select your favirites by clicking the ❤️</p></div>
        // } else {
    
            return ( 
            
            <div>
    
                <div className="rated-wines-title">My favorite wines:</div>
                <div className="wine-list-container">
                {
                    
                    this.state.winelist.map( (m, i) => (
                        <div className="rated-wine-cards"> 
                            <ul> <div> 
                                <div className="wine-name" key={i}>{m.wine_name}   </div>
                                <li key={i}>Type: {m.wine_type} 
                             
                                </li>
                                <li key={i}>Price: {m.wine_price}
                                </li>
                                <li key={i}>Bought at: {m.wine_store}
                                </li>
                                
                            
                                <li key={i}>Comments: {m.comments}
                                </li>
                                <li key={i}><div className="label-container">Wine Label: <img src={m.wine_label} alt="wine label"/>
                                </div>
                                </li>
                                <li key={i}>
                                    <StarRatingComponent className="wine-glasses"
                                        name="app3"
                                        starCount={5}
                                        value={Number(m.wine_rating)}
                                        editing={false}
                                        starColor="#f00"
                                        renderStarIcon={() => <span><i class="fas fa-wine-glass-alt"></i></span>} />
                                </li>
                                {/* <input type="submit" value="Edit" className="wine-edit" /> */}
                                <input type="button" value="Delete" className="wine-edit" onClick={(event)=> this._handleDel(event, m.id, i)} />

                                </div>
                            </ul>
                            </div>
                    ))
                }
                       {this.props.loginStatus.isLoggedIn == false ? <Redirect to ="/"/> : ""}   
                </div>

            </div>
        )
            // }
    
    } 
}

