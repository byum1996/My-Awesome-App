import React from 'react';
import Display from './Display'
import Clear from './Clear'
import Operators from './Operators'
import Numbers from './Numbers'

class Calculator extends React.Component{
    render(){
        return (
            <>
                <Display />
                <Clear />
                <Operators />
                <Numbers />
            </>
        )
    }
    
}

export default Calculator