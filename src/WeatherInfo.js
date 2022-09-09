import React from "react";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="row temp-today">
      <div className="col-5">
        <h2 className="now°">
          <img src={props.data.img} alt="icon" className="emoji-now"></img>
          <span className="temp-now">
            {Math.round(props.data.temperature)}°
          </span>
        </h2>
        <span className="choose-param">
          <p className="choose">
            <span>
              <a href="/" className="active">
                °C
              </a>
            </span>
            |
            <span>
              <a href="/">°F</a>
            </span>
          </p>
        </span>
        <p className="tip">
          {props.data.tip}
          <i className="fa-solid fa-umbrella-beach"></i>
        </p>
      </div>
      <div className="col descr">
        <em>{props.data.description}</em>
      </div>
      <div className="col block">
        <div className="grid-block">
          <ul className="emoji">
            <li>
              <i className="fa-solid fa-droplet"></i>
            </li>
            <li>
              <i className="fa-solid fa-wind"></i>
            </li>
          </ul>

          <ul className="emoji-info">
            <li>
              Humidity
              <br />
              <strong>{props.data.humidity} %</strong>
            </li>
            <li>
              Wind <br />
              <strong>{Math.round(props.data.wind * 3.6)} km / hr</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
