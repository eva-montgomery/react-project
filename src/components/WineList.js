import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


export default class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winelist: this.props.winelist.wines
        }
    }
    render() {
 console.log(this.props)
        return (
            
            <div>
                <div className="rated-wines-title">My rated wines:</div>
                <div className="wine-list-container">
                {
                    this.props.winelist.wines.map( (m, i) => (
                        <div className="rated-wine-cards"> 
                            <ul> 
                                <div key={i}>{m.wine}
                                <li key={i}>Type: {m.type}
                                </li>
                                <li key={i}>Price: {m.price}
                                </li>
                                <li key={i}>Bought at: {m.shop}
                                </li>
                                
                            
                                <li key={i}>Comments: {m.comment}
                                </li>
                                <li key={i}><div className="label-container">Wine Label: <img src={m.label} alt="wine label"/>
                                </div>
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
                                {/* <input type="submit" value="Edit" className="wine-edit" /> */}
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
    _handleDel= (event, index) => {
        event.preventDefault();
        this.props.handleDel(this.props.winelist, index);
    }

}

