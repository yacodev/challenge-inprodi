import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/userModel';

const initialState: User[] = [
  {
    id: 1,
    name: 'Luis Ramirez',
    latitude: '20.6667',
    longitude: '-103.3333',
  },
  {
    id: 2,
    name: 'Juan Perez',
    latitude: '41.3888',
    longitude: '2.159',
  },
  {
    id: 3,
    name: 'Carlos Vera',
    latitude: '40.7143',
    longitude: '-74.006',
  },
  {
    id: 4,
    name: 'Erika Velazquez',
    latitude: '-34.6132',
    longitude: '-58.3772',
  },
  {
    id: 5,
    name: 'Pao Lagos',
    latitude: '45.4112',
    longitude: '-75.6981',
  },
];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => [...state, action.payload],
    eraseUsers: () => [],
    resetUsers: () => [...initialState],
    updateUser: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      state[index] = { ...state[index], ...newData };
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((user) => user.id === id);
      state.splice(index, 1);
    },
  },
});

export const { addUser, eraseUsers, resetUsers, updateUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
