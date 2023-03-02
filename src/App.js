import React from 'react';
import axios from 'axios';

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="discription">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
