import PropTypes from 'prop-types'



export const CounterApp=({ counter })=>{
    const handleAdd=(event,counter)=>{
        counter++;
    }
    return <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    <button onClick={handleAdd(event,counter)}>+1</button>
    </>
}

CounterApp.propTypes={
    counter:PropTypes.number
}
CounterApp.defaultProps={
    counter:0
}