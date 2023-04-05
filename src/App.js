import React from 'react';
import styled from 'styled-components';
import Start from './pages/Start';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);

  return (
    <>
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
    </>
  );
}

export default App;
