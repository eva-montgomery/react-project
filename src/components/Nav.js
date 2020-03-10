
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

import { BrowserRouter as Router, Redirect } from 'react-router-dom';

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
    // console.log(this.props)
    console.log(this.props.loginStatus.isLoggedIn)
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
                {this.props.loginStatus.isLoggedIn ?
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
                  {/* <MDBNavItem>
                    <MDBNavLink to='/profile'>Profile</MDBNavLink>
                  </MDBNavItem> */}


                  <MDBNavItem>
                    <MDBNavLink to='/logout'>Logout</MDBNavLink>
                  </MDBNavItem>

                </MDBNavbarNav>
                :   
                <MDBNavbarNav left>   
                  <MDBNavItem>                      
                    <MDBNavLink to='/'>Login</MDBNavLink>
                    <MDBNavLink to='/signup'>Sign up</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>                
              }
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>

        </MDBContainer>
      </div>
    );
  }
}

export default hamburgerMenuPage;

