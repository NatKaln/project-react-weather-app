import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <h1>📍 Kyiv</h1>
      <form>
        <input type="text" placeholder="Enter a city..." />
        <input type="submit" value="Search 🔎" />
      </form>
      <ul>
        <li>Last updated: Friday 10:00 </li>
        <li>19th of August</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="cloudy" />
          20°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 67%</li>
            <li>Wind: 3.6km/h</li>
            <li>Description: Overcast Clouds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
