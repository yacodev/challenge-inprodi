import { UserCard } from '../../Components/UserCard';
import { HeaderPage } from '../../Components/HeaderPage';
import Button from '@mui/material/Button';

export const HomePage = () => {
  return (
    <>
      <HeaderPage />
      <UserCard
        name='carlos'
        latitude='20.667'
        longitude='-103.333'
        id={1}
        onDelete={() => {}}
        onEdit={() => {}}
      />
      <Button> text</Button>
    </>
  );
};
