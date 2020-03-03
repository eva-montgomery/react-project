import React from 'react';
import Nav from './components/Nav'


function Header(){
    return(
      <div>
        <header className="header">
        <h1>It's Wine-O-Clock</h1>
        <div className="nav">
       <a href="/home" class="active">Home</a>
       <a href="/mywines">My rated wines</a>
       <a href="/wines">All rated wines</a>
       <a href="/favorites">My Favorites</a>
       <a href="/profile">Profile</a>
       <a href="/">Logout</a>
    </div>   
 <Nav />
      </header>
 
     </div>           
    );

} 




export default Header;