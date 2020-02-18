import React from 'react';

export default function WineList({
    wines
}) {
    return (
        <ul> 
            {
                wines.map( (m, i) => (
                    <li key={i}>{m}</li>
                ))
            }
        </ul>
    );
}
    
