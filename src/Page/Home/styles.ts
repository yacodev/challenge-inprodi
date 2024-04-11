import Grid, { GridProps } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const UserCardContainer = styled(Grid)<GridProps>(() => ({
  margin: '40px',
  gap: '20px',
  width: '80%',
}));
