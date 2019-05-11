import React from 'react';
import {inject} from 'mobx-react';
import './generator.css';

@inject('store')
class Generator extends React.Component {

  state = {str: ''};

  generate() {
    const json = JSON.stringify(this.props.store.root);
    this.setState({str: `"${json}"`});
  }

  render () {
    return (
      <section className="generator">
        <button
          className="btn create-btn"
          onClick={this.generate.bind(this)}
        >Create JSON
        </button>
        <code className="generator__output">
          {this.state.str}
        </code>
      </section>
    )
  }
}

export default Generator;
