import React from 'react';
import Devtools from 'mobx-react-devtools';
import {observer} from "mobx-react";
import './App.css';
import Container from './Container/Container';
import Builder from './JSON/Builder';
import Generator from './JSON/Generator';

const App = observer(({store}) => {
  return (
    <div className="app">
      <Devtools />
      <Container container={store.root[0]}/>
      <Builder setStore={store.setStore} />
      <Generator data={store.root} />
    </div>
  )
});

export default App;
