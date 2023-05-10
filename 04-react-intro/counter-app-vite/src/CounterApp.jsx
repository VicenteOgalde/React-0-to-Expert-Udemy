import { useState } from 'react';
import PropTypes from 'prop-types';




export const CounterApp=({ counter })=>{

    const [value,setValue]=useState(counter);

    const handleAdd=()=>{
        setValue((c)=>c+1);
    }
    return <>
    <h1>CounterApp</h1>
    <h2>{ value }</h2>
    <button onClick={handleAdd}>+1</button>
    </>
}

CounterApp.propTypes={
    counter:PropTypes.number
}
CounterApp.defaultProps={
    counter:0
}