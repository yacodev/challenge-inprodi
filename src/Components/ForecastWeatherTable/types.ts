import { WeatherObject } from '../../hooks/useWeather';

export interface ForecastWeatherTableProps {
  rows: WeatherObject[];
  isLoading: boolean;
}
