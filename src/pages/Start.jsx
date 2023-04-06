import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlueButton from '../components/BlueButton';
import { useDispatch } from 'react-redux';
import { init, next } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: 100%;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  async function fetchData() {
    const resMbtiData = await fetch('http://localhost:4000/data/getdata');
    if (resMbtiData.status === 200) {
      const mbtiData = await resMbtiData.json();
      if (mbtiData[0]) {
        dispatch(init(mbtiData[0]));
      }
    } else {
      console.log(await resMbtiData.json());
    }

    // 방문자 수 받아오기
    const resGetCounts = await fetch('http://localhost:4000/data/getCount');
    if (resGetCounts.status === 200) {
      const countData = await resGetCounts.json();
      console.log(countData);
      setCounts(countData.counts);
    } else {
      console.log(await resGetCounts.json());
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="images/main.jpg" alt="MBTI 메인" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다!{'\n\n'}
        {counts}명이 참여해 주셨습니다.
      </SubHeader>
      <BlueButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </div>
  );
}
