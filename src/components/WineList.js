import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


export default function WineList({
    wines
}) {
    return (
        <div>
            <div className="rated-wines-title">My rated wines:</div>
            {
                wines.map( (m, i) => (
            <div className="rated-wine-cards"> <ul> 
                    <div key={i}>{m.wine}
                    <li key={i}>Type: {m.type}
                    </li>
                    <li key={i}>Price: {m.price}
                    </li>
                    <li key={i}>Bought at: {m.shop}
                    </li>
                    <li key={i}>Wine Label: {m.label}
                    </li>
                    <li key={i}>Comments: {m.comment}
                    </li>
                    <li key={i}>
                        <StarRatingComponent className="wine-glasses"
              name="app3"
              starCount={5}
              value={Number(m.rating)}
              editing={false}
              starColor="#f00"
              renderStarIcon={() => <span><i class="fas fa-wine-glass-alt"></i></span>} />
                    </li>
                    <input type="submit" value="Edit" className="wine-edit" />

                    </div>
        </ul>
        </div>
                ))
            }
        </div>
    );
}
    
