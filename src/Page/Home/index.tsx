import { UserCard } from '../../Components/UserCard';
import { HeaderPage } from '../../Components/HeaderPage';
import { useSelector, useDispatch } from 'react-redux';
import { StateSelector } from '../../models/selectorModel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { User } from '../../models/userModel';
import { useState } from 'react';
import { UserCardContainer } from './styles';
import { UserForm, UserModal } from '../../Components/UserModal';
import { updateUser, deleteUser } from '../../store/slices/user/userSlice';
import { WarningModal } from '../../Components/WarningModal/WarningModal';
import IconButton from '@mui/material/IconButton';

export const HomePage = () => {
  const userList = useSelector<StateSelector>((state) => state.user) as User[];
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [userIdSelected, setUserIdSelected] = useState<number | null>(null);
  const [userToUpdate, setUserToUpdate] = useState<User | null>(null);

  const onCloseModal = () => setShowModal(false);
  const onOpenModal = () => setShowModal(true);

  const handleSetUserToUpdate = (userId: number) => {
    setUserIdSelected(userId);
    const userSelected = userList.find((user) => user.id === userId);
    if (!userSelected) return;
    setUserToUpdate(userSelected);
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
            key={user.id}
          />
        ))}
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </UserCardContainer>

      <UserModal
        openModal={showModal}
        onCloseModal={onCloseModal}
        onUpdate={onUpdateUser}
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
