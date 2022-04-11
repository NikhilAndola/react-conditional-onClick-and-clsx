import React, { useState } from 'react';
import './style.css';
import clsx from 'clsx';
import Hover from './Hover';

export default function App() {
  const [a, setA] = useState(0);
  let arr = ['one', 'two', 'three', 'four'];

  function abc(e) {
    setA(e);
  }
  console.log(a);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      {arr.map((item, index) => (
        <ul>
          <li
            className={clsx(
              { list: a === index },
              { clr: a === index },
              { unselect: a !== index }
            )}
            onClick={() => abc(index)}
          >
            {item}
          </li>
        </ul>
      ))}

      <Hover />
    </div>
  );
}
