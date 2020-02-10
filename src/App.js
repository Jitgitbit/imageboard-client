import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">hello world</div>
      </Provider>
    );
  }
}

export default App