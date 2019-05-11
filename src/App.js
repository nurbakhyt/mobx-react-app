import React from 'react';
import Devtools from 'mobx-react-devtools';
import {observer, inject, PropTypes} from "mobx-react";
import './App.css';
import Container from './Container/Container';
import Builder from './JSON/Builder';
import Generator from './JSON/Generator';

const App = inject('store')(
  observer(({store}) => {
    return (
      <div className="app">
        <Devtools />
        <Container container={store.root[0]} />
        <Builder />
        <Generator />
      </div>
    )
  })
);

App.propTypes = {
  store: PropTypes.observableObject
};

export default App;
