import './HomeView.css';
import { Link } from "react-router-dom";
import logo from '../img/Better LOGO.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import sketch from '../img/Station 3D Sketch.png';
import closeUp from '../img/Charger 3D Sketch Close Up.png';

const HomeView = () => {
    return(
        <>

        {/* HEADER */}

        <header className="header">
        <img src={logo} className="logo" alt='logo'/>
            <div className='secondaryContainer'>
                <h2 className='secondaryTitle'>
                    What The EV Industry Needs
                </h2>
                <p className="and">
                    and
                </p>
                {/* <img src={sample6} className="secondaryImg"/> */}
                <Link className="aboutButton" to="/about">
                    How is TimeCharge solving this?
                </Link>
            </div>
        </header>

        <div className='main'>
            <h2 className='mainTitle'>
                The Future, With TimeCharge
            </h2>
            <p className='mainStatement'>
                We are on a mission to revolitionize the electric vechicle charging experience.
            </p>
            <p className='secondaryStatement'>
                Station design:
            </p>
            </div>

            <div className='carouselContainer'>
                <Carousel variant='dark'>

                    {/* 1st Image */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sketch}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>1st Slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* 2nd Img */}

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={closeUp}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p>2nd Slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* 3rd Img */}
{/* 
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sample4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>
                             3rd Slide
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        </>
    )
}

export default HomeView;