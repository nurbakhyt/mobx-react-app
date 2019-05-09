import React from 'react';
import './container.css';
import AddBtn from '../Btn/AddBtn';
import Box from '../Box/Box';

function Container({items, addItem}) {
  return (
    <div className="container">
      {items.map((box, i) => <Box key={i} box={box} />)}
      <AddBtn addItem={addItem}/>
    </div>
  )
}

export default Container;
