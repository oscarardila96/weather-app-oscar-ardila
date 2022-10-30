import { useState, useEffect } from "react";
import axios from 'axios';


const useWeather = () => {

  const [weather, setWeather] = useState({})
  const [degrees, setDegrees] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [refresh])

  useEffect(() => {
    const success = pos => {
      const apiKey = "1c93453002fb626d1b21434b8f4f94c4"
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(res => setWeather(res.data));
    }

    const error = () => alert("error");

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [degrees]);

  const celsius = Math.floor(weather?.main?.temp - 273.15);

  const changeDegrees = () => {
    setDegrees(!degrees)
  }

  const refreshWeather = () => {
    setRefresh(!refresh)
  }

  const currentTime = Date.now();
  const time = new Date(currentTime).toLocaleTimeString();
  const date = new Date(currentTime).toDateString();

  return { weather, degrees, refresh, loading, celsius, time, date, changeDegrees, refreshWeather }
}

export default useWeather;