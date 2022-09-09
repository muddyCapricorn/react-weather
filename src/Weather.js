import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FormatDate from "./FormatDate";
import WeatherInfo from "./WeatherInfo";

function Weather(props) {
  let [city, setCity] = useState(props.default);
  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    console.log(response.data);
    let weather = {
      ready: true,
      city: response.data.name,
      day: new Date(response.data.dt * 1000),
      img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      tip: "Don`t forget to use suncream",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    };
    setWeather(weather);
  }

  function handleSubmit(event) {
    //debugger;
    console.log(city);
    event.preventDefault();
    search();
  }

  function findCity(event) {
    setCity(event.target.value);
  }
  function search() {
    
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
                <input
                  type="search"
                  placeholder="Change city"
                  onChange={findCity}
                />
                <button type="submit" className="glass-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
          <WeatherInfo data={weather} />

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
