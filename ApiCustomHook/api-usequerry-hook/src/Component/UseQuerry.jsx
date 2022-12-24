import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseQuerry = (request) => {

     const [response, setResponse] = useState();

     useEffect(() => {
          request.then((fetchResponse) => {
               setResponse(fetchResponse.data);
          }).catch(err => console.log(err))
     }, [])

     return { response }


}

export default UseQuerry