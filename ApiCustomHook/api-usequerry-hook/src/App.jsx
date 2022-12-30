import { useState } from 'react'
import UseQuerry from './Component/UseQuerry';
import axios from 'axios'
function App() {
  const { response } = UseQuerry(
    axios.get('https://jsonplaceholder.typicode.com/todos/')
  )
  console.log(response)


  return (
    <div className="App">
      
    </div>
  )
}

export default App
