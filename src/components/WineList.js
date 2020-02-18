import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


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
                    <li key={i}>
                        <StarRatingComponent
              name="app3"
              starCount={5}
              value={Number(m.rating)}
              editing={false}
              starColor="#f00"
              renderStarIcon={() => <span><i class="fas fa-wine-glass-alt"></i></span>} />
                    </li>
                    
                    </div>
                ))
            }
        </ul>
        </div>
    );
}
    
