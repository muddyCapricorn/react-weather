import "./App.css";

function App() {
  let weatherData = {
    city: "Kyiv",
    day: "Mon",
    time: "10:09",
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: "15",
    tip: "Don`t forget to use suncream",
    description: "Sunny",
    humidity: 10,
    wind: 8,
  };
  return (
    <div className="App">
      <div className="container">
        <div className="z2">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-2 today">
              <p>
                {weatherData.day}
                <br />
                {weatherData.time}
              </p>
            </div>
            <div className="col-1">
              <button id="location-button">
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
            <div className="col-3 search">
              <form>
                <input
                  type="search"
                  id="search-city"
                  placeholder="Change city"
                  autocomplete="off"
                />
                <button type="submit" className="glass-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="row temp-today">
            <div className="col-5">
              <h2 className="now°">
                <img src={weatherData.img} alt="icon" className="emoji-now"></img>
                <span className="temp-now">{weatherData.temperature}</span>°
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
                {weatherData.tip}
                <i className="fa-solid fa-umbrella-beach"></i>
              </p>
            </div>
            <div className="col descr">
              <em>{weatherData.description}</em>
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
                    <strong>{weatherData.humidity} %</strong>
                  </li>
                  <li>
                    Wind <br />
                    <strong>{weatherData.wind} km / hr</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button className="more">More</button>
        </div>
        <video src="images/sunnybeach.mp4" autoplay loop muted></video>
      </div>
      <div>
        <a href="/" target="_blank">
          Open-source code
        </a>
        <span className="author"> by Lesya Zubak</span>
      </div>
    </div>
  );
}

export default App;
