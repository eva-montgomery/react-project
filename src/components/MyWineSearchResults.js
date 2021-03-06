
import React, {useEffect} from 'react';
import {
    Redirect, Link
  } from "react-router-dom"; 
import StarRatingComponent from 'react-star-rating-component';
import { actionDelWine } from '../actions';
import MyWineSearchResultsContainer from '../containers/MyWineSearchResultsContainer'
import axios from 'axios';
axios.defaults.withCredentials = true;


export default function MyWineSearchResults({ myWineSearchResults, handleClearResults, handleDel, doSearch }) {
    useEffect(() => {
        handleClearResults();
    }, []);
 


    console.log("WINESEARCHRESULTS")
   return (myWineSearchResults && myWineSearchResults.length > 0) ? myWineSearchResults.map((m, i) => {
        return (
            <div key={`wine-${m.wine_name}-${i}`}className="rated-wine-cards"> 
            <ul> 
            <div>
                <div className="wine-name"> {m.wine_name} 
                </div>
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
                <Link to={{
                    pathname: `/edit/${m.id}`,
                    params: {
                        wineId: m.id,
                        wine_name: m.wine_name,
                        wine_type: m.wine_type,
                        wine_price: m.wine_price,
                        wine_store: m.wine_store,
                        comments: m.comments,
                        wine_label: m.wine_label,
                        wine_rating: m.wine_rating
                    }

                   }}>
                     <input type="button" 
                     value="Edit" className="wine-edit" 
                    />
                    </Link>
                
                <input type="button" value="Delete" className="wine-edit" onClick={async (event)=>{
                   await handleDel(myWineSearchResults, m.id, i);
                   doSearch()
                    
                } } />
                </div>

            </ul>
            </div>
        )
    }): 
 null
        }

       