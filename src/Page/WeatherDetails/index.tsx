import { useParams } from 'react-router-dom';
import { HeaderPage } from '../../Components/HeaderPage';
import { InformationCard } from '../../Components/InformationCard';
import { useSelector } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import { User } from '../../models/userModel';
import Grid from '@mui/material/Grid';
import { InformationContainer } from './styles';
import { useEffect, useState } from 'react';

export const WeatherDetails = () => {
  const { id } = useParams();
  const userList = useSelector<StateSelector>((state) => state.user) as User[];
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id || !userList) return;
    const userSelected = userList.find((user) => user.id === Number(id));
    if (!userSelected) return;
    setUser(userSelected);
  }, [userList, id]);
  console.log({ user });
  const data = { id: '2', name: 'carlos' };
  return (
    <>
      <HeaderPage />
      <InformationContainer container>
        <Grid item xs={12} sm={4}>
          <InformationCard information={data} title='Información de usuario' />
        </Grid>
        <Grid item xs={12} sm={7}>
          <InformationCard information={data} title='Clima actual' />
        </Grid>
      </InformationContainer>
    </>
  );
};
