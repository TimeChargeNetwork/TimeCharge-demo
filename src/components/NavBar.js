import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
    <>
        <Navbar bg="black" variant="dark" sticky='top'>
        <Container style={{justifyContent: 'center', marginTop: '15px'}}>
          <Nav className='links'>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/sites"> Sites </Link>
            <Link to="/invest"> Invest </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/media"> Media </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}

export default NavBar;