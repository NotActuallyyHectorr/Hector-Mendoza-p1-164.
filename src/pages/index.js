import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

 const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const HomePage = () => (
  <Container>
    <Title>Welcome to My Portfolio</Title>
    <Nav>
      <Link to="/portfolio/">Portfolio</Link> | <Link to="/blog/">Blog</Link> | <Link to="/contact/">Contact</Link>
    </Nav>
  </Container>
);

export default HomePage;