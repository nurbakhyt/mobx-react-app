import React from 'react';
import './container.css';
import AddBtn from '../Btn/AddBtn';
import Box from '../Box/Box';

class Container extends React.Component {
  render() {
    const {
      items,
      addItem
    } = this.props;

    return (
      <div className="container">
        {items.map((item, i) => {
          if (item.type === 'box') {
            return <Box
              key={i}
              box={item}
            />
          } else if (item.type === 'container') {
            return <Container
              key={i}
              items={item.items}
              addItem={addItem}
            />
          }
        })}
        <AddBtn addItem={addItem}/>
      </div>
    )
  }
}

export default Container;
