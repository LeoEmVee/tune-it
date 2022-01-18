import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function NavBar () {
  return (
    <>
      <Navbar className='navbar navlogo'>
        <Container>
          <Navbar.Brand href='#' className='logo navlogo'>
            <Navbar.Text>TUNE-IT!</Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;