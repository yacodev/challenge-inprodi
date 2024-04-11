import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
