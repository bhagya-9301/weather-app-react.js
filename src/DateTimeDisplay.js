import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css';

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="datetime-container">
      <p className='time'> {dateTime.toLocaleTimeString()}</p>
      <p className='date'> {formatDate(dateTime)}</p>
    </div>
  );
};

export default DateTimeDisplay;
