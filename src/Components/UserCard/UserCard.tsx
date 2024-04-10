import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { UserCardProps } from './types';

export const UserCard = ({
  name,
  latitude,
  longitude,
  onEdit,
  onDelete,
}: UserCardProps) => {
  return (
    <Card sx={{ width: '240px' }}>
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
          <Grid item xs={12}>
            <Grid container justifyContent='center' gap={1} mt={2}>
              <Button variant='contained' onClick={onEdit}>
                {' '}
                Editar{' '}
              </Button>
              <Button variant='outlined' onClick={onDelete}>
                {' '}
                Eliminar{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
