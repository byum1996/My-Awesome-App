import React from 'react'
import './calculator.css'

const Operator = ({value, onClick}) => (
    <button className="number" onClick={() => onClick(value)}>
        {value}
    </button>
)

export default Operator