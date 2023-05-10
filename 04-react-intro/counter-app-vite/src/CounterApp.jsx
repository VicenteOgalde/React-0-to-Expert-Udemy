import PropTypes from 'prop-types'

export const CounterApp=({counter})=>{
    return <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    </>
}

CounterApp.propTypes={
    counter:PropTypes.number
}
CounterApp.defaultProps={
    counter:0
}