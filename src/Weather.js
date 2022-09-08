import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FormatDate from "./FormatDate";

function Weather() {
  let [weather, setWeather] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDeafault();
  }

  function showWeather(response) {
    console.log(response.data);
    let weather = {
      ready: true,
      city: response.data.name,
      day: new Date(response.data.dt * 1000),
      time: "10:09",
      img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      tip: "Don`t forget to use suncream",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    };
    setWeather(weather);
  }

  function search() {
    let city = "Kyiv";
    const apiKey = `0a016ab1d0d641ea3159c73766f38d70`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weather.ready) {
    return (
      <div>
        <div className="z2">
          <div className="row">
            <div className="col-6">
              <h1>{weather.city}</h1>
            </div>
            <div className="col-2 today">
              <p>
                <FormatDate date={weather.day} />
              </p>
            </div>
            <div className="col-1">
              <button className="location-button">
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
            <div className="col-3 search">
              <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Change city" />
                <button type="submit" className="glass-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="row temp-today">
            <div className="col-5">
              <h2 className="now°">
                <img src={weather.img} alt="icon" className="emoji-now"></img>
                <span className="temp-now">
                  {Math.round(weather.temperature)}°
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
                {weather.tip}
                <i className="fa-solid fa-umbrella-beach"></i>
              </p>
            </div>
            <div className="col descr">
              <em>{weather.description}</em>
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
                    <strong>{weather.humidity} %</strong>
                  </li>
                  <li>
                    Wind <br />
                    <strong>{Math.round(weather.wind * 3.6)} km / hr</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button className="more">More</button>
        </div>
        <video src="images/sunnybeach.mp4" autoPlay loop muted></video>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
