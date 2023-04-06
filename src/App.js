import React from 'react';
import styled from 'styled-components';
import Start from './pages/Start';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';
import ResultPage from './pages/ResultPage';

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
  const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      <Main>
        {page === 0 ? (
          <Start />
        ) : page <= survey.length ? (
          <Mbti />
        ) : (
          <ResultPage />
        )}
      </Main>
    </>
  );
}

export default App;
