import React, { FC } from 'react';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Alert />
      <div className="container">
        <Home />
      </div>
    </>
  )
}

export default App;
