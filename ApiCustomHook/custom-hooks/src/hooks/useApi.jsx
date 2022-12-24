import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
const useApi = (url, option) => {

     const [loading, setLoading] = useState(false);
     const [data, setData] = useState([]);
     const [error, setError] = useState("")
     const [execution, setExcecution] = useState(false);


     const execute = () => {
          setExcecution(v => !v);
     }

     useEffect(() => {
          const cancelToken = axios.CancelToken.source();
          setLoading(true)

          axios({ url, ...option }, {
               cancelToken: cancelToken.token
          })
               .then(res => {
                    setData(res.data)
                    setError("");
               }).catch(err => {
                    setError(err);
                    console.log(err);
               }).finally(() => {
                    setLoading(false)
               })

          return () => {
               // * cancel request to fetch again & again uselessly
               cancelToken.cancel();
          }

     }, [execution])


     return [loading, data, error, execute]



}

export default useApi;