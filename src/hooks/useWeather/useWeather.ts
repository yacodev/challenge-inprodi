import { useEffect, useState } from 'react';
import { UseWeatherProps, WeatherObject, WeatherResponse } from './types';
import { useQuery } from 'react-query';
import { Queries } from '../../constants/queries';
import { weatherServices } from '../../services/weather.services';
import { getEndDate } from '../../utils/getEndDate';
import dayjs from 'dayjs';

export function useWeather({ lat, lng }: UseWeatherProps) {
  const [todayWeather, setTodayWeather] = useState<WeatherObject | null>(null);
  const [forecastWeather, setForecastWeather] = useState<
    WeatherObject[] | null
  >(null);
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    setRequestError(false);
  }, []);

  const endDate = getEndDate();
  const { isLoading } = useQuery({
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
      setRequestError(true);
      throw new Error('Error al obtener el clima');
    },
    onSuccess: (data: WeatherResponse) => {
      const newTodayWeather = data.hours[0];
      const newForecastWeather = data.hours.map((weather) => ({
        ...weather,
        time: dayjs(weather.time).format('YYYY-MM-DD HH:mm'),
      }));
      setRequestError(false);
      setTodayWeather(newTodayWeather);
      setForecastWeather(newForecastWeather);
    },
    enabled: !!lat && !!lng,
    retry: false,
  });

  return {
    todayWeather,
    forecastWeather,
    isLoading,
    requestError,
  };
}
