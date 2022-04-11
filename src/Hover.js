import React from 'react';
// import './style.css';

export default function Hover() {
  function MouseOver(event) {
    event.target.style.background = 'green';
  }
  function MouseOut(event) {
    event.target.style.background = '';
  }
  return (
    <div className="App">
      <button onMouseOver={MouseOver} onMouseOut={MouseOut}>
        Hover over me!
      </button>
    </div>
  );
}
