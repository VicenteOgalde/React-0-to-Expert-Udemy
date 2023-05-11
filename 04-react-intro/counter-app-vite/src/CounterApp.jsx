import { useState } from 'react';
import PropTypes from 'prop-types';




export const CounterApp=({ counter })=>{

    const [value,setValue]=useState(counter);

    const handleAdd=()=>{
        setValue((c)=>c+1);
    }
    const handleSubtract=()=>{
        setValue((c)=>c-1);
    }
    const handleReset=()=>{
        setValue(counter);
    }
    return <>
    <h1>CounterApp</h1>
    <h2>{ value }</h2>
    <button onClick={handleAdd}>+1</button>
    <button onClick={handleSubtract}>-1</button>
    <button onClick={handleReset}>reset</button>
    </>
}

CounterApp.propTypes={
    counter:PropTypes.number
}
CounterApp.defaultProps={
    counter:0
}