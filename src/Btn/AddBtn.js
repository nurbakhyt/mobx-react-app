import React from 'react';
import './addBtn.css';

function AddBtn({container}) {
  return (
    <div className="add-btn-group">
      <div className="float-btns">
        <button
          className="btn"
          onClick={() => container.items.push({type: 'box', color: 'orange'})}
        >
          Box
        </button>
        <button
          className="btn"
          onClick={() => container.items.push({type: 'container', items: []})}
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
