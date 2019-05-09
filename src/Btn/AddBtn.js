import React from 'react';
import './addBtn.css';

function AddBtn({addItem}) {
  return (
    <div className="add-btn-group">
      <div className="float-btns">
        <button
          className="btn"
          onClick={() => addItem({type: 'box'})}
        >
          Box
        </button>
        <button
          className="btn"
          onClick={() => addItem({type: 'container', items: []})}
        >
          Container
        </button>
      </div>

      <button className="btn btn--add">
        Add
      </button>
    </div>
  )
}

export default AddBtn;
