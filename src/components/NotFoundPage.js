import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import useRouter from 'use-react-router';
import { Link } from 'react-router-dom';

const wave = keyframes`
  0%,
  50%,
  100% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(10%);
  }
  75% {
    transform: translateY(10%);
  }
`;

const Wrapper = styled.div`
  color: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 10rem;
  font-family: 'Anton', sans-serif;
`;

const Letter = styled.span`
  animation: ${wave} 3s ease-in-out infinite;
`;

const SubText = styled.span`
  margin-top: 4rem;
  font-family: 'Inter', sans-serif;
  font-size: 2.3rem;
`;

const StyledLink = styled(Link)`
  margin-top: 4rem;
  font-family: 'Inter', sans-serif;
  font-size: 2.3rem;
  color: #fff;
  outline: none;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  padding: 0 0.2rem;
  
  &:focus {
    color: #FF55A1;
    border-bottom: 2px solid #FF55A1;
  }
  
  &:hover {
    color: #FF55A1;
    border-bottom: 2px solid #FF55A1;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const NotFoundPage = () => {
  const { history } = useRouter();
  useEffect(() => {
    history.push('notfound');
  }, [history]);
  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <Letter>4</Letter>
        <Letter style={{ animationDelay: '0.5s' }}>0</Letter>
        <Letter style={{ animationDelay: '1s' }}>4</Letter>
      </div>
      <SubText>The absence of limitations is the enemy of art.</SubText>
      <StyledLink to="/1">Back Home?</StyledLink>
    </Wrapper>
  );
};

export default NotFoundPage;
