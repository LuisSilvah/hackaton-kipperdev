type Coord = {
  lon: number;
  lat: number;
}

type MainAirQuality = {
  aqi: number;
}

interface Components {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

interface AirQualityData {
  main: MainAirQuality;
  components: Components;
  dt: number;
}

export type AirQualityResponse = {
  coord: Coord;
  list: AirQualityData[];
};

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export type WeatherResponse = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
