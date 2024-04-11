import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../Page/Home';
import { WeatherDetails } from '../Page/WeatherDetails';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/user/:id' element={<WeatherDetails />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
