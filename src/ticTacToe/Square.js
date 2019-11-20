// this is importing React from react dependency
import React from 'react'
import './game.css'

// functional react component. The other type is Class componet
// 1. Name of the component always starts with captial letter
// 2. Always has a single input parameter - props
//     "props" is like a DNA. You inherit from your parents and you cannot chnage it.
//     often time, it contains multiple properties and you can destructure it, like { prop1, prop2 }
//     or you can choose to use dot notation, like props.prop1, props.prop2, etc
// 3. Always returns a JSX block
function Square({onClick, value}) {

    // this JSX is rendering a button component
    // by passing props className and onClick
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square