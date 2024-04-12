import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { InformationCardProps } from './types';

export const InformationCard = ({
  information,
  title,
}: InformationCardProps) => {
  const arrayKeys = Object.keys(information);

  return (
    <Card sx={{ width: '240px' }}>
      <CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#FD4C5C' }} aria-label='recipe'>
              A
            </Avatar>
          }
          title={<Typography variant='h6'>{title}</Typography>}
        />
        <Grid container gap={1}>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {arrayKeys.map((key) => (
            <Grid container key={key}>
              <Grid item xs={4}>
                <Typography>{key}:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Chip
                  label={information[key]}
                  color='primary'
                  style={{ width: '150px' }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
