import React from 'react';
import './App.css';
import WeatherInfo from './WeatherInfo';
import DateTimeDisplay from './DateTimeDisplay';


const App = () => {
 
  return (
    <div>
      <h1 className='heading'>Weather Check</h1>
       <WeatherInfo />
       <DateTimeDisplay />
    </div>
  );
};

export default App;
