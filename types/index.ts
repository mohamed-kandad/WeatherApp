export interface WeatherData {
  name: string;
  weather: {description: string; icon: string}[];
  main: {temp: number};
}

export interface ForecastData {
  dt_txt: string;
  main: {temp: number};
  weather: {icon: string}[];
}
