import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    // it's called by React: 
    // 1. after the component re-renders after setting state and before the useEffect callback is called
    // 2. or before the component is removed from the page if it is no longer being returned by a parent component
    // render -> useEffect -> setState -> re-render -> cleanup -> useEffect 
    return function cleanup() {
      clearInterval(timerID)
    }

  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
