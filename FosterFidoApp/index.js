import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';

let store = Store();

const myApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

// AppRegistry.registerComponent('FosterFidoApp', () => App);
AppRegistry.registerComponent('FosterFidoApp', () => myApp);
