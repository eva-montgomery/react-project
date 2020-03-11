
import React, {useEffect} from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
axios.defaults.withCredentials = true;



export default function WineSearchResults({ wineSearchResults, handleClearResults, handleFavorite }) {
    useEffect(() => {
        handleClearResults();
    }, []);
    
    console.log(wineSearchResults)
    console.log("WINESEARCHRESULTS")
   return (wineSearchResults && wineSearchResults.length > 0) ? wineSearchResults.map((m, i) => {
        return (
            <div   
            key={`wine-${m.wine_name}-${i}`}className="rated-wine-cards"> 
            <ul> 
            <div>
                <div className="wine-name"> {m.wine_name} </div>
                <li>Type: {m.wine_type}
                </li>
                <li>Price: {m.wine_price}
                </li>
                <li>Bought at: {m.wine_store}
                </li>
                <li>Comments: {m.comments}
                </li>
                <li><div className="label-container">Wine Label: <img src={`/images/${m.wine_label}`} alt="wine label"/>
                </div>
                </li>
                <li>
                    <StarRatingComponent className="wine-glasses"
                        name="app3"
                        starCount={5}
                        value={Number(m.wine_rating)}
                        editing={false}
                        starColor="#f00"
                        renderStarIcon={() => <span><i class="fas fa-wine-glass-alt"></i></span>} />
                </li>
                <input type="button" className="fav-button" value="❤️" onClick={(event)=> handleFavorite(event, m.id)} />
                </div>

            </ul>
            </div>
        )
    }): 
 null
        }
       
