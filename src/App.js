import React from 'react';
import './App.css';
import Container from './Container/Container';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: 'container',
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem (item) {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    });
  }

  render() {
    return (
      <div className="app">
        <Container
          items={this.state.items}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
