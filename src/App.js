import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import Nav from './Nav'
import Content from './Content';
import Footer from './Footer';

// Routes to be added


// import 
// /ratedwines
// profile 
// import Profile './Profile'
// import ViewRatedWines from './ViewRatedWines';
// /myfavorites
// import MyFavorites from './MyFavorites';



import LoginForm from './containers/LoginFormContainer';
import SignUpForm from './containers/SignUpFormContainer';
import Profile from './containers/ProfileContainer'

import { createStore, combineReducers } from 'redux';
import { wines, wineSearch, user } from './reducers';
import WineForm from './containers/WineFormContainer';
import WineList from './containers/WineListContainer';
import AllWinesList from './containers/AllWinesListContainer';
import MyFavoriteWines from './containers/MyFavoriteWinesListContainer';
import MyWines from './containers/MyWinesContainer'

import WineSearchResults from './containers/WineSearchContainer';
import WineSearch from './containers/WineSearchContainer';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({wines, wineSearch, user})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
        <Router>
    <div className="App">
      <div className="content-container">

    <Header 
      />
 
    {/* <Nav 
      /> */}
      <Switch>
          
        <Route path="/" exact>
          <LoginForm /> 
        </Route>
  
        
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/wines">
          <AllWinesList />
        </Route>
        
        <Route path="/mywines">
          <MyWines />
        </Route>

        <Route path="/favorites">
          <MyFavoriteWines />
        </Route>
        


        <Route path="/home">
            {/* <Content /> */}
            <WineForm />
            <WineList />
        </Route>
        <Route path="/profile" >
          <Profile /> 
        </Route>
    </Switch>


  

        {/* <Route path="/myfavorites">
          <MyFavorites />
        </Route>

        {/* <WineSearch /> */}
 
      <Footer />
      </div>
    </div>
    </Router>
      </Provider>
      
  );
}

export default App;
