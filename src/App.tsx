import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
