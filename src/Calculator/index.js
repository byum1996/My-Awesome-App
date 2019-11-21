import React from 'react';
import Display from './Display'
import Clear from './Clear'
import Operators from './Operators'
import Numbers from './Numbers'
import Calculate from './Calculate'
import './calculator.css'

const calculation = '3 x 6 = 18'

const Calculator = () => {
    const onClick = (e) => console.log(e)
    const onClear = () => console.log('Clear')

    return (
        <div className="calculator">
            <Display calculation={calculation}/>
            <div className="main">
                <div className="numbers">
                    <Clear onClick={onClear}/>
                    <Numbers onClick={onClick}/>
                </div>
                <div className="operations">
                    <Operators onClick={onClick}/>
                    <Calculate onClick={onClick}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator