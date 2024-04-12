import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { UserCardProps } from './types';

export const UserCard = ({
  id,
  name,
  latitude,
  longitude,
  onDelete,
  onUpdate,
  onWeather,
}: UserCardProps) => {
  return (
    <Card sx={{ width: '240px' }}>
      <CardActionArea onClick={() => onWeather(id)}>
        <CardContent>
          <Grid container>
            <Grid item xs={4}>
              <Typography>Nombre:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{name}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Latitud:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{latitude}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Longitud:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{longitude}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <Grid container mb={2}>
        <Grid item xs={12}>
          <Grid container justifyContent='center' gap={1} mt={2}>
            <Button variant='contained' onClick={() => onUpdate(id)}>
              Editar
            </Button>
            <Button variant='outlined' onClick={() => onDelete(id)}>
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
