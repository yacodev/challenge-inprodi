import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { WeatherCardProps } from './types';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const WeatherCard = ({ weather, title }: WeatherCardProps) => {
  return (
    <Card sx={{ width: '240px' }}>
      <CardContent>
        <CardHeader
          avatar={<WbSunnyIcon fontSize='large' />}
          title={<Typography variant='h6'>{title}</Typography>}
        />
        <Grid container gap={1}>
          <Grid xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={7}>
            <Typography>Temperatura:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Chip label={weather?.airTemperature.noaa} color='primary' />
          </Grid>
          <Grid item xs={7}>
            <Typography>Humedad:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Chip label={weather?.humidity.noaa} color='primary' />
          </Grid>
          <Grid item xs={7}>
            <Typography>Velocidad viento:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Chip label={weather?.windSpeed.noaa} color='primary' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
