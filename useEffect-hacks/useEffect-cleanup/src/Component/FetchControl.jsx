import React, { useState } from 'react'
import { useEffect } from 'react'

const FetchControl = () => {

     const [count, setCount] = useState(0)


     // ? before;
     // useEffect(() => {
     //      fetch('https://jsonplaceholder.typicode.com/todos/1')
     //           .then(res => res.json())
     //           .then(res => console.log({ res, count }))
     //           .catch(err => console.log(err))
     //           .finally(() => { console.log("fetchCompleted") })
     // }, [count])

     // // ! after 
     // useEffect(() => {
     //      let subscribed = true
     //      fetch('https://jsonplaceholder.typicode.com/todos/1')
     //           .then(res => res.json())
     //           .then(res => {
     //                if (subscribed) {
     //                     console.log({ res, count })
     //                }
     //           })
     //           .catch(err => {
     //                if (subscribed) {
     //                     console.log(err)
     //                }
     //           })
     //           .finally(() => { console.log("fetchCompleted") })

     //      return () => {
     //           subscribed = false;
     //      }
     // }, [count])

     // ? advanced
     useEffect(() => {
          const controller = new AbortController();
          const signal = controller.signal;

          fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
               .then(res => res.json())
               .then(res => {
                    if (res) {
                         console.log({ res, count }, "fetched");
                    }
               })
               .catch(err => {
                    if (err.name === 'AbortError') {
                         console.log('Cancelled! from abort');
                    } else {
                         // todo: do what you want; 
                    }
               })

          return () => {
               console.log("Cancelled by cleanup")
               controller.abort();
          }
     }, [count])

     /*
     ? when you are using the count dependency inside the count it will run always when you increase count but 
     ? this time your api is going to call same querry 
     ! if you want to prevent this
     * then please see after code if you want to see difference please slow downn you network;
     */

     return (
          <>
               <div>FetchControl</div>
               <div>count : {count}</div>
               <button onClick={() => setCount(p => p + 1)}>Click me</button>
          </>
     )
}

export default FetchControl