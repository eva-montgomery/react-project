import React from 'react';



class Nav extends React.Component {
    constructor(props) {
        // Register Nav as one of the React Components on the page.
        super(props);
        this.state = {
            isOpen: false
        };
    }
    
    render () {
        return(

                this.state.isOpen ?
                <React.Fragment>
                <a onClick={this._toggleMenu}>🍷🍷</a>
            <ul>
                {/* <div className="nav"> */}
                   <li> <a href="/home" class="active">Home</a></li>
                   <li><a href="/mywines">My rated wines</a></li> 
                   <li> <a href="/wines">All rated wines</a></li> 
                   <li>  <a href="/favorites">My Favorites</a></li> 
                   <li> <a href="/profile">Profile</a></li> 
                   <li> <a href="/">Logout</a></li> 
                {/* </div>    */}
            </ul>
                </React.Fragment>
                : 
                <a onClick={this._toggleMenu}>🍷 Menu 🍷</a>
    
    );
    };


    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
         } , () => {
            console.log('menu toggled!');
       
        });
    }

}


export default Nav;