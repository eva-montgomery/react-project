import React from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { createStore, combineReducers } from 'redux';
import { wines, wineSearch } from './reducers';
import WineSearch from './containers/WineSearchContainer';
import WineForm from './containers/WineFormContainer';
import WineList from './containers/WineListContainer';
import WineSearchResults from './containers/WineSearchContainer';

import { Provider } from 'react-redux';




const rootReducer = combineReducers({wines, wineSearch})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div className="App">
      <div className="content-container">

      <Header 
      />

      <Content />
      <Provider store={store}>
        <WineForm />

        <WineList />
        <WineSearch />
      </Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
