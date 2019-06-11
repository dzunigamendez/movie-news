import React from 'react';
import styled from 'styled-components';
import Landing from '../components/landing';

const Container = styled.div`
  padding: 0 20px;

  @media (min-width: 700px) {
    padding: 0 30px;
  }

  @media (min-width: 1000px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
  }
`;

function Home() {
  return (
    <Container>
      <Landing />
    </Container>
  );
}

export default Home;
