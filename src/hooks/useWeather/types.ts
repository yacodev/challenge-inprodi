export interface UseWeatherProps {
  lat: string | undefined;
  lng: string | undefined;
}

export interface WeatherValue {
  noaa: number;
}

export interface WeatherObject {
  airTemperature: WeatherValue;
  humidity: WeatherValue;
  time: string;
  windSpeed: WeatherValue;
}

export interface WeatherResponse {
  hours: WeatherObject[];
}
