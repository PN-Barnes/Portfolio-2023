import React from 'react';
import './header.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
  const headerLinkStyles = {
    color: 'black',
    fontWeight: '700',
    fontSize: '1.5em',
    transition: 'font-size 3s',
  };
  return (
    <header>
      <Navbar fixed='top' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='navBrand'>Paul Barnes</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='navbar-toggler'>
            <Nav className='ms-auto'>
              <LinkContainer
                className='linkContainer'
                style={headerLinkStyles}
                to='/projects'
              >
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer
                className='linkContainer'
                style={headerLinkStyles}
                to='/developers'
              >
                <Nav.Link>Developers</Nav.Link>
              </LinkContainer>
              <LinkContainer
                className='linkContainer'
                style={headerLinkStyles}
                to='/contact'
              >
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
