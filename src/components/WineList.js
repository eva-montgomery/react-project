import React from 'react';
import {
    Redirect
  } from "react-router-dom"; 
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
axios.defaults.withCredentials = true;



export default class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // winelist: this.props.winelist.wines
            winelist: []
        }
    }
    async componentDidMount() {
        console.log(this.props)
        console.log(this.props.winelist)
        
        await this.props.getWines();
        console.log(this.props.winelist)
    }

    // _handleDel= (event, index) => {
    //     event.preventDefault();
    //     console.log('calling handle del')
    //     this.props.handleDel(this.props.winelist.wines, index);
    // }

    _handleDel= async (event, wineId, index) => {
        console.log(this.props)
        event.preventDefault();
        this.props.handleDel(this.props.winelist.wines, wineId, index);
        // const deleted = await axios({
        //     method: 'post',
        //     url: "/api/delete",
        //     data: {
        //         wine_id: wineId
        //     }
        // }).then( resp => {
        //     return resp.data;
        // });
    }


    render() {
        console.log(this.state)
        console.log(this.props)
        if (this.props.winelist.wines.length === 0) { 
            return <div className="rated-wines-title">You have not rated any wines yet</div>
        } else { 
        
        return ( 
            
            <div>
    
                <div className="rated-wines-title">Your rated wines:</div>
                <div className="wine-list-container">
                {
                    
                    this.props.winelist.wines.map( (m, i) => (
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
                                <input type="button" value="Delete" className="wine-edit" onClick={(event)=> this._handleDel(event, i)} />

                                </div>
                            </ul>
                            </div>
                    ))
                }

                </div>

            </div>
        )
    } 
}
}


