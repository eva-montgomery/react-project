
import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class hamburgerMenuPage extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    return (
        <div className="header">
 
        <MDBContainer>
          <MDBNavbar
            color='light-blue lighten-4'
            style={{ marginTop: '10px' }}
            light
          >
            <MDBContainer>
              <MDBNavbarBrand>It's Wine-O-Clock</MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to='/home'>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='/mywines'>My rated wines</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink to='/wines'>All rated wines</MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink to='/favorites'>My Favorites</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='/profile'>Profile</MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink to='/logout'>Logout</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </div>
    );
  }
}

export default hamburgerMenuPage;

// class Nav extends React.Component {
//     constructor(props) {
//         // Register Nav as one of the React Components on the page.
//         super(props);
//         this.state = {
//             isOpen: false
//         };
//     }
    
//     render () {
//         return(

//                 this.state.isOpen ?
//                 <React.Fragment>
//                 <a onClick={this._toggleMenu}>🍷🍷</a>
//             <ul>
//                 {/* <div className="nav"> */}
//                    <li> <a href="/home" class="active">Home</a></li>
//                    <li><a href="/mywines">My rated wines</a></li> 
//                    <li> <a href="/wines">All rated wines</a></li> 
//                    <li>  <a href="/favorites">My Favorites</a></li> 
//                    <li> <a href="/profile">Profile</a></li> 
//                    <li> <a href="/">Logout</a></li> 
//                 {/* </div>    */}
//             </ul>
//                 </React.Fragment>
//                 : 
//                 <a onClick={this._toggleMenu}>🍷 Menu 🍷</a>
    
//     );
//     };


//     _toggleMenu = () => {
//         this.setState({
//             isOpen: !this.state.isOpen
//          } , () => {
//             console.log('menu toggled!');
       
//         });
//     }

// }


// export default Nav;