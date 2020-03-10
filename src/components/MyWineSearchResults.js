
import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default function MyWineSearchResults({ myWineSearchResults }) {
    console.log("WINESEARCHRESULTS")
   return (myWineSearchResults && myWineSearchResults.length > 0) ? myWineSearchResults.map((m, i) => {
        return (
            <div key={`wine-${m.wine_name}-${i}`}className="rated-wine-cards"> 
            <ul> 
                <div>{m.wine_name}
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
                <input type="submit" value="Edit" className="wine-edit" />
                
                <input type="button" value="Delete" className="wine-edit" onClick={(event)=> this._handleDel(event, m.id, i)} />

                </div>

            </ul>
            </div>
        )
    }): 
 null
        }
       