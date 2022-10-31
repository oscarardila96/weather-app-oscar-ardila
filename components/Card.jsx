import React from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import useWeather from '../hooks/useWeather';

const Card = () => {

  const { weather, degrees, loading, celsius, time, date, changeDegrees } = useWeather();

  return (
    <>
      {loading ?
        <CircleLoader
          color="black"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader" />
        :
        <div className='cardCont'>
          <h1 className="fancy-line">Weather App</h1>
          <div className="imageDiv">
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`} alt="weather icon" />
          </div>
          <h2 className="fancy-line">{weather.name}, {weather.sys?.country}.</h2>
          <h3 className="fancy-line">{date} - {time} </h3>
          <div className="weather">
            <div className="condition">
              <h2 className="fancy-line">Conditions</h2>
              <p>{weather.weather?.[0]?.main}</p>
            </div>
            <div className="temp">
              <h2 className="fancy-line">Temperature</h2>
              <p>{degrees ? celsius : Math.floor((celsius * 1.8) + 32)} {degrees ? "°C" : "°F"}</p>
            </div>
            <div className="wind">
              <h2 className="fancy-line">Wind</h2>
              <p>{weather.wind?.speed} km/h</p>
            </div>
            <div className="humidity">
              <h2 className="fancy-line">Humidity</h2>
              <p>{weather.main?.humidity} %</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={changeDegrees}>{degrees ? "Get Farenheit" : "Get Celsius"} </button>
          </div>
        </div>
      }
    </>
  );
};

export default Card;

