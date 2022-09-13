import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleSubmit(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>📍 Kyiv</h1>
        <form>
          <input type="text" placeholder="Enter a city..." autoFocus="on" />
          <input type="submit" value="Search 🔎" />
        </form>
        <ul className="currentInfo">
          <li>Last updated: Friday 10:00 </li>
          <li>19th of August</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt="cloudy"
              />
              <div>
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="description">
              <li>Humidity: 67%</li>
              <li>Wind: 3.6km/h</li>
              <li>Description: Overcast Clouds</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ae257b6f200fc59e9f754b38798d7627";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "Loading";
  }
}
