import React from 'react'
import useStopWatch from '../hooks/useStopWatch'

const UseStopWatch = () => {

     const [time, start, stop, pause, reset] = useStopWatch(0, 1000);

     return (
          <>
               <div>{time}</div>
               <button onClick={start}>start</button>
               <button onClick={stop}>stop</button>
               <button onClick={pause}>pause</button>
               <button onClick={reset}>reset</button>
          </>
     )
}

export default UseStopWatch