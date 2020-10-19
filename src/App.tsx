import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { store } from './reducers/rootReducer';

const App: FC = () => (
  <Provider store={store}>
    <Navbar />
    <Alert />
    <div className="container">
      <Home />
    </div>
  </Provider>
);

export default App;
