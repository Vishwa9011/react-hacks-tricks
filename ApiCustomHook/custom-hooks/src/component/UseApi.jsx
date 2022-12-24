import React from 'react'
import useApi from '../hooks/useApi'

const UseApi = () => {

     const [loading, data, error, execute] = useApi('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' })
     console.log('loading: ', loading);
     console.log('error: ', error);
     console.log('data: ', data);



     return (
          <>
               <div>UseApi</div>
               {/* <div>Error: {error}</div> */}
               <div> {loading ? "..loading" : '...'}</div>
               <button onClick={execute}>Execute</button>
          </>
     )
}

export default UseApi