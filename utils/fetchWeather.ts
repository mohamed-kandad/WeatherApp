import axios from 'axios';
import {OPENWEATHER_API_KEY, BASE_URL} from '../constants';

export const fetchWeatherByCity = async (city: string) => {
  const currentWeather = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`,
  );
  const weather = await currentWeather.json();
  const currentForecast = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`,
  );
  const Forecast = await currentForecast.json();

  return {
    current: weather,
    forecast: Forecast,
  };
};
