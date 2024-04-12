import { useState } from 'react';
import { UseWeatherProps, WeatherObject, WeatherResponse } from './types';
import { useQuery } from 'react-query';
import { Queries } from '../../constants/queries';
import { weatherServices } from '../../services/weather.services';
import { getEndDate } from '../../utils/getEndDate';

export function useWeather({ lat, lng }: UseWeatherProps) {
  const [todayWeather, setTodayWeather] = useState<WeatherObject | null>(null);
  const [forecastWeather, setForecastWeather] = useState<
    WeatherObject[] | null
  >(null);
  const endDate = getEndDate();
  console.log('Aqui');
  const { data, isLoading } = useQuery({
    queryKey: [Queries.getWeather, lat, lng],
    queryFn: () =>
      weatherServices.getTodayWeather({
        lat,
        lng,
        params: 'airTemperature,humidity,windSpeed',
        endDate,
      }),
    onError: () => {
      setTodayWeather(null);
      setForecastWeather(null);
      throw new Error('Error al obtener el clima');
    },
    onSuccess: (data: WeatherResponse) => {
      console.log('Aqui2');
      console.log({ data });
      const newTodayWeather = data.hours[0];
      setTodayWeather(newTodayWeather);
      setForecastWeather(data.hours);
    },
    enabled: !!lat && !!lng,
    retry: false,
  });

  console.log('test', data);

  return {
    todayWeather,
    forecastWeather,
    isLoading,
  };
}
