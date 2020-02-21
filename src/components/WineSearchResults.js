
import React from 'react';

export default function WineSearchResults({ wineSearchResults }) {
    console.log(wineSearchResults)
    console.log("WINESEARCHRESULTS")
   return (wineSearchResults && wineSearchResults.length > 0) ? wineSearchResults.map((wine, index) => {
        return (

            <tr key={ index }>
            <td>{ wine.id }</td>
            <td>{ wine.wine }</td>
            </tr>
        )
    }): 
 null
        }
        