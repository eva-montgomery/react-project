
import React from 'react';

export default function WineSearchResults({ wineSearchResults }) {
    console.log(wineSearchResults)
    console.log("WINESEARCHRESULTS")
   return (wineSearchResults && wineSearchResults.length > 0) ? wineSearchResults.map((wine, index) => {
        return (
    <div className="wine-search-result-card">
            <tr key={ index } >
            {/* <li>{ wine.id }</li> */}
            <li>Type: { wine.wine }</li>
            <li>Color: { wine.color }</li>
            <li>Origin: { wine.country }</li>
            <li>Date: { wine.date }</li>
            </tr>
            </div>
        )
    }): 
 null
        }
       