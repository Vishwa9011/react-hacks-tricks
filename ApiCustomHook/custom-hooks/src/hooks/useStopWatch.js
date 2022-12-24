
import { useEffect } from 'react';
import { useState, useRef } from 'react';

const useStopWatch = (initialValue, delay) => {

     const [time, setTime] = useState(initialValue);
     const timerRef = useRef(null);

     const start = () => {
          clearInterval(timerRef.current)
          timerRef.current = setInterval(() => {
               setTime(prev => prev + 1);
          }, delay)
     }

     const stop = () => {
          clearInterval(timerRef.current)
     }

     const pause = () => {
          clearInterval(timerRef.current);
          timerRef.current = null;
     }

     const reset = () => {
          pause();
          setTime(initialValue)
     }

     useEffect(() => {

          // * Cleanup function
          return reset;
     }, [])
     return [time, start, stop, pause, reset];
}


export default useStopWatch;