
import React from 'react';
import { Link } from 'react-router-dom';
export default function WineSearchResults({ wines }) {
    let wines;
    if (wines > 0) {
        wines = wines[0]
    }
    return (
        <div className="table" >
            <table >
                <thead className="thead">
                    <th align="left">Title</th>
                    <th align="center">Duration</th>
                </thead>
                {results.data.results.map( =>
                    <tr key={track.id} >
                        <td align="left" className="track-title" >{track.title}</td>
                        <td align="right" className="track-duration">{Math.floor(track.duration / 60) + ':' + Math.floor(track.duration % 60)}</td>
                    </tr>
                )
                }
            </table>
        </div >
    )
}
