import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
