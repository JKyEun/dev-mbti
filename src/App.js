import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
