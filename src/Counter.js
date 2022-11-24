import React, { useState } from "react"
import './Counter.css'


const Counter = () => {
    const [contador, setContador] = useState(0)

    const handleOnClick = operador => {
        let newValue = operador === '+'
            ? contador + 1
            : contador - 1


        setContador(newValue)
    }


  return (
    <div className="counter">
        <span>{contador}</span>
        <button onClick={() => handleOnClick('-')}>-</button>
        <button onClick={() => handleOnClick('+')}>+</button>
    </div>
  )
}

export default Counter
