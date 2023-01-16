import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavdropDown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <LinkContainer to='/'>
        <Navbar.Brand>Paul Barnes</Navbar.Brand>
      </LinkContainer>
      <Nav className='justify-content-end'>
        <LinkContainer to='/projects'>
          <Nav.Link>Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/developers'>
          <Nav.Link>Developers</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/contact'>
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  );
};

export default Header;
