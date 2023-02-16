import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const input = parseInt(event.target.value);
      setCountdown(Math.floor(input));
      event.target.value = '';
    }
  };


  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time" className="current-time">{countdown}</div>
    </div>
  )
}


export default App;
