import React from 'react';
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
        const myWines = await axios({
            method: 'get',
            url: '/api/mywines'
        }).then( resp => {
            console.log(resp)
            return resp.data;
        });
        console.log(myWines)
        this.setState({
            winelist: myWines.wineList
        })
        console.log(this.state.winelist)
    }

    _handleDel= (event, index) => {
        event.preventDefault();
        console.log('calling handle del')
        this.props.handleDel(this.state.winelist, index);
    }
    render() {
        console.log(this.state)

        if (this.state.winelist.length === 0) { 
            return <div className="rated-wines-title">You have not rated any wines yet</div>
        } else { 
        
        return ( 
            
            <div>
    
                <div className="rated-wines-title">My most recent rated wines:</div>
                <div className="wine-list-container">
                {
                    
                    this.state.winelist.map( (m, i) => (
                        <div className="rated-wine-cards"> 
                            <ul> 
                                <div key={i}>{m.wine_name}
                                <li key={i}>Type: {m.wine_type}
                                </li>
                                <li key={i}>Price: {m.wine_price}
                                </li>
                                <li key={i}>Bought at: {m.wine_store}
                                </li>
                                <li key={i}>Comments: {m.comments}
                                </li>
                                <li key={i}><div className="label-container">Wine Label: <img src={m.wine_label} alt="wine label"/>
                                </div>
                                </li>
                                <li key={i}>
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


