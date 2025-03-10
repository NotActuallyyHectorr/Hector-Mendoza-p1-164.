import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const PortfolioPage = () => (
  <PortfolioContainer>
    <h1>My Portfolio</h1>
    <p>Here are some of my amazing projects!</p>
  </PortfolioContainer>
);

export default PortfolioPage;
