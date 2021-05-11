import React from 'react'

export const Counter = ({ counter, onClickPlus, onClickMinus }) => {
    return (
        <div>
            <h2>Counter</h2>
            <h2>{counter}</h2>
            <button onClick={onClickPlus}>plus</button>
            <button onClick={onClickMinus}>minus</button>
        </div>
    )
}
