import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectCleanup = () => {
     const [count, setCount] = useState(0)
     useEffect(() => {
          const id = setInterval(() => {
               setCount(p => p + 1);
          }, 1000);

          // * cleanup functions
          return () => {
               clearInterval(id);
          }
     }, [])

     return (
          <div>Count: {count}</div>
     )
}

export default UseEffectCleanup