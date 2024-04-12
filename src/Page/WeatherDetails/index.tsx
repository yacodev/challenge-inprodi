import { useParams, useNavigate } from 'react-router-dom';
import { HeaderPage } from '../../Components/HeaderPage';
import { InformationCard } from '../../Components/InformationCard';
import { useSelector } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import { User } from '../../models/userModel';
import Grid from '@mui/material/Grid';
import { InformationContainer } from './styles';
import { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { Information } from '../../Components/InformationCard/types';
import { ForecastWeatherTable } from '../../Components/ForecastWeatherTable';
import Typography from '@mui/material/Typography';
import { WeatherCard } from '../../Components/WeatherCard';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const WeatherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userList = useSelector<StateSelector>((state) => state.user) as User[];
  const [user, setUser] = useState<User | null>(null);
  const [userInformation, setUserInformation] = useState<Information | null>(
    null
  );

  useEffect(() => {
    if (!id || !userList) return;
    const userSelected = userList.find((user) => user.id === Number(id));
    if (!userSelected) return;
    setUser(userSelected);
    const newUserInformation = {
      id: userSelected.id.toString(),
      name: userSelected.name,
    };
    setUserInformation(newUserInformation);
  }, [userList, id]);

  const { todayWeather, forecastWeather, isLoading } = useWeather({
    lat: user?.latitude,
    lng: user?.longitude,
  });

  const goBack = () => {
    navigate('/');
  };
  return (
    <>
      <HeaderPage />
      <InformationContainer container>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
            <IconButton color='primary' size='large' onClick={goBack}>
              <ArrowBackIcon fontSize='large' />
            </IconButton>
            <Typography variant='body2'>Regresar</Typography>
          </Grid>
        </Grid>

        {userInformation !== null && (
          <Grid item xs={12} sm={4}>
            <InformationCard
              information={userInformation}
              title='Información de usuario'
            />
          </Grid>
        )}
        <Grid item xs={12} sm={7}>
          <WeatherCard weather={todayWeather} title='Clima Hoy' />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>
            Pronostico del tiempo para los próximos 5 días
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ForecastWeatherTable
            rows={forecastWeather ?? []}
            isLoading={isLoading}
          />
        </Grid>
      </InformationContainer>
    </>
  );
};
