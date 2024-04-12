import axios from 'axios';
import config from '../config';

export interface GetWeather {
  lat: string | undefined;
  lng: string | undefined;
  params: string;
  endDate: string;
}

const weatherServices = {
  getTodayWeather: async ({ lat, lng, params, endDate }: GetWeather) => {
    const response = await axios
      .get(
        `${config.API_URL}?lat=${lat}&lng=${lng}&params=${params}&end=${endDate}&source=noaa`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${config.API_KEY}`,
          },
        }
      )
      .then((resp) => resp.data);
    return response;
  },
};

export { weatherServices };
