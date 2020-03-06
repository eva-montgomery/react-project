// import React from 'react';
// import {
//     Redirect
//   } from "react-router-dom"; 


// import axios from 'axios';
// axios.defaults.withCredentials = true;

// export default class SearchBar extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             searchText: '',
//             winelist: []
//         }
//     }
//     _setSearchText = (searchText) => {
//         this.setState({
//             searchText
//         }, () => {
//             console.log('updated search text');
//         });   
//     }

//     render() {
//         return (
//             <input 
//               onChange={(event) => {
//                 handleChange(event.target.value)
//               }}
//               value={text} 
//             />
//         );
//     }
// }

import React from 'react';

SearchBar.defaultProps = {
    text: 'default search text'
}

function SearchBar({
    text,
    handleChange
}) {
    return (
        <input 
          onChange={(event) => {
            handleChange(event.target.value)
          }}
          value={text} 
        />
    );
}

export default SearchBar;