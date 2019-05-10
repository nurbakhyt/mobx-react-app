import React from 'react';
import Devtools from 'mobx-react-devtools';
import './App.css';
import Container from './Container/Container';

function App({store}) {
  return (
    <div className="app">
      <Devtools />
      <Container container={store.items[0]}/>
    </div>
  )
}

export default App;
