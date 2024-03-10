import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = (state) => ({
    increment,
    decrement
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)