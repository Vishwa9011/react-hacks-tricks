import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {

     const [count, increment, decrement] = useCounter(0);

     return (
          <>
               <div>Count: {count}</div>
               <button onClick={decrement}>Decrement</button>
               <button onClick={increment}>Increment</button>
          </>

     )
}

export default Counter