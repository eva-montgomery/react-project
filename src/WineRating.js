import React from 'react'
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

export default class WineRating extends React.Component {
    constructor() {
      super();
  
      this.state = {
        rating: 1,
        rating_custom_icon: 6,
        rating_half_star: 3.5,
        rating_empty_initial: 0
      };
    }
  
  
    onStarClickCustomIcon(nextValue, prevValue, name) {
      console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
      this.setState({rating_custom_icon: nextValue});
      this.props.onChange(nextValue);

    }
  
    
  
    onStarClickEmptyInitial(nextValue, prevValue, name) {
      console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
      this.setState({rating_empty_initial: nextValue});
    }
  
    render() {
      return (
        <div style={{margin: 20}}>

          <div style={{fontSize: 20}}>
            <StarRatingComponent
              name="app3"
              starCount={5}
              value={this.state.rating_custom_icon}
              onStarClick={this.onStarClickCustomIcon.bind(this)}
              starColor="#f00"
              renderStarIcon={() => <span><i class="fas fa-wine-glass-alt"></i></span>} />
          </div>
  
         
          

          </div>
      );
      }}