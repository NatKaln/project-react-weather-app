import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="currentInfo">
        <li>
          <span className="info">Last updated:</span>{" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="description">
            <li>Humidity:{props.data.humidity} %</li>
            <li>Wind:{Math.round(props.data.wind)} km/h</li>
            <li className="text-capitalize">
              Description: {props.data.description}
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
