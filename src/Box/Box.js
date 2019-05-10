import React from 'react';
import {observer} from 'mobx-react';
import './box.css';

@observer
class Box extends React.Component {

  randomColor() {
    const colors = ['green', 'red', 'aqua',
      'blue', 'aquamarine', 'black',
      'bluviolet', 'chocolate', 'coral', 'indigo'];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  changeColor() {
    let {box} = this.props;
    box.color = this.randomColor();
  }

  render() {
    const {box} = this.props;

    return (
      <div
        className="box"
        style={{background: `${box.color}`}}
        onClick={this.changeColor.bind(this)}
      />
    )
  }
}

export default Box;
