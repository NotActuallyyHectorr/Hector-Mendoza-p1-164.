import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const AboutPage = () => (
  <AboutContainer>
    <h1>About Me</h1>
    <p>Here is a little about myself and my journey.</p>
  </AboutContainer>
);

export default AboutPage;
