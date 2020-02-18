import React from 'react';

export default function WineList({
    wines
}) {
    return (
        <div>My rated wines
        <ul> 
            {
                wines.map( (m, i) => (
                    <div key={i}>{m.wine}
                    <li key={i}>{m.type}
                    </li>
                    <li key={i}>{m.price}
                    </li>
                    <li key={i}>{m.shop}
                    </li>
                    <li key={i}>{m.label}
                    </li>
                    <li key={i}>{m.comment}
                    </li>
                    <li key={i}>{m.rating}
                    </li>
                    </div>
                ))
            }
        </ul>
        </div>
    );
}
    
