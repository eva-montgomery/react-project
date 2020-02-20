  
import React from 'react';

export default function WineSearch({
    handleClick
}) {
    return (
        <button onClick={handleClick} className="wine-search-btn">Search for wines online</button>
    )
}
