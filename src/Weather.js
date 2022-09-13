import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>📍 {weatherData.city}</h1>
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
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="description">
              <li>Humidity:{weatherData.humidity} %</li>
              <li>Wind:{Math.round(weatherData.wind)} km/h</li>
              <li>Description: {weatherData.description}</li>
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
