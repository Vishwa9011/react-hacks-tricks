import React from 'react'
import useToggle from '../hooks/useToggle.js';


const UseToggle = () => {
     const [value, toggleValue] = useToggle(true);
     const [value1, toggleValue1] = useToggle(true);
     const check = useToggle(true);
     return (
          <div className="App">
               <h1>Custom hook {value ? "TRUE" : "FALSE"}</h1>
               <h1>Custom hook {value1 ? "TRUE" : "FALSE"}</h1>
               <button onClick={toggleValue}>Click me</button>
               <button onClick={toggleValue1}>Click me</button>
          </div>
     )
}

export default UseToggle