import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>📍 {weatherData.city}</h1>
        <form>
          <input type="text" placeholder="Enter a city..." autoFocus="on" />
          <input type="submit" value="Search 🔎" />
        </form>
        <ul className="currentInfo">
          <li>
            <span className="info">Last updated:</span>{" "}
            <FormattedDate date={weatherData.date} />{" "}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <div>
                <span className="temperature">6</span>
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
    const apiKey = "563c287319cc0168b7cda1764769fc5f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "Loading...";
  }
}
