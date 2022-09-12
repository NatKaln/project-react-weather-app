import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <span className="temperature">6</span>
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
}
