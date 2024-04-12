import { UserCard } from '../../Components/UserCard';
import { HeaderPage } from '../../Components/HeaderPage';
import { useSelector, useDispatch } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { User } from '../../models/userModel';
import { useState } from 'react';
import { UserCardContainer } from './styles';
import { UserForm, UserModal } from '../../Components/UserModal';
import {
  updateUser,
  deleteUser,
  addUser,
} from '../../store/slices/user/userSlice';
import { WarningModal } from '../../Components/WarningModal/WarningModal';
import IconButton from '@mui/material/IconButton';
import { getNewId } from '../../utils/getNewId';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const userList = useSelector<StateSelector>((state) => state.user) as User[];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [userIdSelected, setUserIdSelected] = useState<number | null>(null);
  const [userToUpdate, setUserToUpdate] = useState<UserForm | null>(null);

  const onCloseModal = () => {
    setShowModal(false);
    setUserIdSelected(null);
    setUserToUpdate(null);
  };
  const onOpenModal = () => setShowModal(true);

  const handleSetUserToUpdate = (userId: number) => {
    setUserIdSelected(userId);
    const userSelected = userList.find((user) => user.id === userId);
    if (!userSelected) return;
    const userFormatted = {
      name: userSelected.name,
      latitude: userSelected.latitude.toString(),
      longitude: userSelected.longitude.toString(),
    };
    setUserToUpdate(userFormatted);
    onOpenModal();
  };

  const handleUserDelete = (userId: number) => {
    setUserIdSelected(userId);
    setShowWarningModal(true);
  };

  const onUpdateUser = (user: UserForm) => {
    const newUser = {
      ...user,
      id: userIdSelected,
    };

    dispatch(updateUser({ id: userIdSelected, newData: newUser }));
  };

  const onDeleteUser = () => {
    if (!userIdSelected) return;
    dispatch(deleteUser({ id: userIdSelected }));
    setShowWarningModal(false);
  };

  const onCreateUser = (user: UserForm) => {
    const newId = getNewId();

    const newUser = {
      ...user,
      id: newId,
    };
    dispatch(addUser(newUser));
  };

  const handleGoWeather = (id: number) => {
    navigate(`/user/${id}`);
  };
  return (
    <>
      <HeaderPage />
      <UserCardContainer container>
        {userList.map((user) => (
          <UserCard
            name={user.name}
            latitude={user.latitude}
            longitude={user.longitude}
            id={user.id}
            onDelete={handleUserDelete}
            onUpdate={handleSetUserToUpdate}
            onWeather={handleGoWeather}
            key={user.id}
          />
        ))}
        <IconButton color='primary' size='large' onClick={onOpenModal}>
          <AddCircleIcon fontSize='large' />
        </IconButton>
      </UserCardContainer>

      <UserModal
        openModal={showModal}
        onCloseModal={onCloseModal}
        onUpdate={onUpdateUser}
        onCreate={onCreateUser}
        userId={userIdSelected}
        user={userToUpdate}
      />
      <WarningModal
        open={showWarningModal}
        onCloseModal={() => setShowWarningModal(false)}
        onAccept={onDeleteUser}
      />
    </>
  );
};
