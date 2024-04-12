import Grid, { GridProps } from '@mui/material/Grid';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(Grid)<GridProps>(() => ({
  backgroundColor: '#1474D2',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Title = styled(Typography)<TypographyProps>(() => ({
  color: '#fff',
  fontSize: '34px',
  fontWeight: 600,
  marginLeft: '6px',
}));
