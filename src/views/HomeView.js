import './HomeView.css';
import logo from '../img/email.LOGO.png';
import sample4 from '../img/sampleImage4.png';
import sample6 from '../img/sampleImage6.png';
import Carousel from 'react-bootstrap/Carousel';

const HomeView = () => {
    return(
        <>

        {/* HEADER */}

        <header className="header">
        <img src={logo} className="logo"/>
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
                            src={sample4}
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
            <div className='secondaryContainer'>
                <h2 className='secondaryTitle'>
                    What The EV Industry Needs
                </h2>
                <ul className='secondaryList'>
                    <p>
                        Reliable Service
                    </p>
                    <p>
                        Wider Network
                    </p>
                    <p>
                        Safety
                    </p>
                </ul>
                <img src={sample6} className="secondaryImg"/>
            </div>
        </>
    )
}

export default HomeView;