import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import MobileContent from "../components/MobileContent";

const ChatList = () => {
    return (
        <>
            <Wrapper>
                <MobileFrame>
                    <MobileContent />
                </MobileFrame>
            </Wrapper>
        </>
    );
};

export default ChatList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MobileFrame = styled.div`
  width: 360px;
  height: 800px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  overflow: hidden;
  transform-origin: top left;

  @media (max-width: 360px), (max-height: 800px) {
    transform: scale(${({ theme }) => `min(${window.innerWidth / 360}, ${window.innerHeight / 800})`});
  }
`;