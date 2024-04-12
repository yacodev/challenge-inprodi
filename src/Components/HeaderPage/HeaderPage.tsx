import Grid from '@mui/material/Grid';
import weatherIcon from '../../assets/weather-icon.svg';
import { HeaderContainer, Title } from './styles';

export const HeaderPage = () => {
  return (
    <>
      <HeaderContainer container>
        <Grid item xs={4}>
          <Grid container justifyContent='center'>
            <img src={weatherIcon} alt='logo' width='70px' />
          </Grid>
        </Grid>
        <Grid xs={7}>
          <Title>Weather App</Title>
        </Grid>
      </HeaderContainer>
    </>
  );
};
