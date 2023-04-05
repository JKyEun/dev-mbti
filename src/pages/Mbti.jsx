import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrangeButton from '../components/OrangeButton';
import styled from 'styled-components';
import { next } from '../store/modules/mbti';
import Progress from '../components/Progress';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

export default function Mbti() {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, idx) => {
          return (
            <li key={idx}>
              <OrangeButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                }}
              />
              {idx === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
