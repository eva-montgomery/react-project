import React from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { createStore } from 'redux';
import { wines } from './reducers';
import WineForm from './containers/WineFormContainer';
import WineList from './containers/WineListContainer';
import { Provider } from 'react-redux';



const store = createStore(wines);

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Provider store={store}>
        <WineForm />
        <WineList />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
