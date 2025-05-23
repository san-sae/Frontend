// components/MobileContent.js
import React from 'react';
import styled from 'styled-components';

const MobileContent = () => {
  return (
    <Container>
      <Header>📱 모바일 웹</Header>
      <Body>
        이곳은 모바일 화면입니다.
      </Body>
    </Container>
  );
};

export default MobileContent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 12px;
  border-bottom: 2px solid #eee;
`;

const Body = styled.main`
  flex: 1;
  padding-top: 12px;
  font-size: 1rem;
  color: #333;
`;
