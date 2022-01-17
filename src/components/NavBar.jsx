import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavBar () {
  return (
    <>
      <Navbar className='navbar navlogo'>
        <Container>
          <Navbar.Brand href='#' className='logo'>TUNE-IT</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;