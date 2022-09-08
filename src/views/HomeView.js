import './HomeView.css';
import { Link } from "react-router-dom";
import logo from '../img/email.LOGO.png';
import sample4 from '../img/sampleImage4.png';
import sample6 from '../img/sampleImage6.png';
import Carousel from 'react-bootstrap/Carousel';
import sample from '../img/sampleImage.png'

const HomeView = () => {
    return(
        <>

        {/* HEADER */}

        <header className="header">
        <img src={logo} className="logo"/>
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
                Revolutionize
            </h2>
            <p className='mainStatement'>
                We are on a mission to revolitionize the way electric vechicles charge.
            </p>
            </div>

            <div className='carouselContainer'>
                <Carousel variant='dark'>

                    {/* 1st Image */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sample4}
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
                            src={sample}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p>2nd Slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* 3rd Img */}

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
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default HomeView;