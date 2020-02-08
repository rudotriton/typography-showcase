import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem 0;
  background: ${(p) => p.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  padding: 1rem 3rem;
  background: linear-gradient(to bottom, #FF55A1 0%, #FF55A1 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  color: ${(p) => p.theme.white};
  font-size: 2.5rem;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: background-size 0.2s;

  &:focus {
    background-size: 4px 50px;
  }

  &:disabled {
    visibility: hidden;
  }

  &:hover {
    background-size: 4px 50px;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Page = styled.span`
  font-size: 3rem;
  font-family: 'Inter', sans-serif;
  color: ${(p) => p.theme.white};
  margin: 0 4rem;
`;

const A = styled.a`
  margin-top: 5rem;
  font-size: 2rem;
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

const Pager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage] = useState(2);
  const {
    history,
    location: { pathname },
  } = useReactRouter();

  useEffect(() => {
    setCurrentPage(parseInt(pathname.slice(1), 10));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const prevPage = () => {
    const prev = currentPage - 1;
    if (prev >= 1) {
      history.push(`/${prev}`);
    }
  };

  const nextPage = () => {
    const next = currentPage + 1;
    if (next <= lastPage) {
      history.push(`/${next}`);
    }
  };

  if (pathname !== '/notfound') {
    return (
      <Wrapper>
        <RowWrapper>
          <Button
            disabled={currentPage === 1}
            onClick={prevPage}
          >
        Prev
          </Button>
          <Page>{pathname.slice(1)}</Page>
          <Button
            disabled={currentPage === lastPage}
            onClick={nextPage}
          >
        Next
          </Button>
        </RowWrapper>
        <A href="https://github.com/rudotriton/typography-showcase" target="_blank">GitHub</A>
      </Wrapper>
    );
  }
  return [];
};

export default Pager;
