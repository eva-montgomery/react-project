import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { wines } from './reducers';
import WineForm from './containers/WineFormContainer';
import WineList from './containers/WineListContainer';
import { Provider } from 'react-redux';



const store = createStore(wines);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WineForm />
        <WineList />
      </Provider>
    </div>
  );
}

export default App;
