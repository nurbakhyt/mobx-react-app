import React from 'react';
import Devtools from 'mobx-react-devtools';
import './App.css';
import Container from './Container/Container';
import Builder from './JSON/Builder';

function App({store}) {
  return (
    <div className="app">
      <Devtools />
      <Container container={store.root[0]}/>
      <Builder setStore={store.setStore} />
    </div>
  )
}

export default App;
