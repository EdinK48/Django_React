import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentDate(data.date);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>The date is {currentDate} and the time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
