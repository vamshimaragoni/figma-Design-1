import React, { useState, useEffect } from 'react';
import './Stlyes.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faPinterest } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [time, setTime] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.seconds > 0) 
      {
        setTime((previous) => ({ ...previous, seconds: previous.seconds - 1 }));
      } 
      else if (time.minutes > 0)
       {
        setTime((previous) => ({ ...previous, seconds: 59, minutes: previous.minutes - 1 }));
      } 
      else if (time.hours > 0)
       {
        setTime((previous) => ({
          ...previous,
          minutes: 59,
          seconds: 59,
          hours: previous.hours - 1,
        }));
      } 
      else if (time.days > 0) {
        setTime((previous) => ({
          ...previous,
          hours: 23,
          minutes: 59,
          seconds: 59,
          days: previous.days - 1,
        }));
      }
    }, 1000);
return () => clearInterval(interval);
  }, [time]);

  return (
    <div className='top'>
      <div className="heading">WE'RE LAUNCHING SOON</div>
      <div className="timer">
        <div className="timer-item">
          <div className="timer-value">{time.days}</div>
          <div className="label">DAYS</div>
        </div>
        <div className="timer-item">
          <div className="timer-value">{time.hours}</div>
          <div className="label">HOURS</div>
        </div>
        <div className="timer-item">
          <div className="timer-value">{time.minutes}</div>
          <div className="label">MINUTES</div>
        </div>
        <div className="timer-item">
          <div className="timer-value">{time.seconds}</div>
          <div className="label">SECONDS</div>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faPinterest} />
      </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default App;










