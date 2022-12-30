import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Axios = () => {

     const [count, setCount] = useState(0)

     // ? advanced
     useEffect(() => {
          const cancelToken = axios.CancelToken.source();
          console.log('cancelToken: ', cancelToken);
          axios.get('https://jsonplaceholder.typicode.com/todos/1', {
               // ! canceltoken 
               cancelToken: cancelToken.token
          })
               .then(res => {
                    if (res) {
                         console.log({ res, count }, "axios fetched");
                    }
               })
               .catch(err => {
                    if (axios.isCancel(err)) {
                         console.log('Cancelled! from cancelToken axios');
                    } else {
                         // todo: do what you want; 
                    }
               })

          return () => {
               console.log("Cancelled by cleanup");
               cancelToken.cancel();
          }
     }, [count])


     return (
          <>
               <div>Axiox</div>
               <div>count : {count}</div>
               <button onClick={() => setCount(p => p + 1)}>Click me</button>
          </>
     )
}

export default Axios