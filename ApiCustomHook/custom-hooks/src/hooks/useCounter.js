import { useState } from "react";

const useCounter = (initialValue) => {

     const [count, setCount] = useState(initialValue)

     const increment = () => {
          setCount(prev => prev + 1)
     }

     const decrement = () => {
          setCount(prev => prev - 1)
     }

     return [count, increment, decrement];
}

export default useCounter;