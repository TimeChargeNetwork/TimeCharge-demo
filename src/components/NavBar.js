import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link, Linkv} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
    <>
        <Navbar bg="black" variant="dark">
        <Container style={{justifyContent: 'center', marginTop: '15px'}}>
          <Nav>
            <Link to="/" className='home'> Home </Link>
            <Link to="/about" className='about'> About </Link>
            <Link to="/socialMedia" className='media'> Media </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}

export default NavBar;