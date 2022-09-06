import './HomeView.css';
import logo from '../img/email.LOGO.png';
import sample1 from '../img/sampleImage.png';
import sample5 from '../img/sampleImage5.webp';
import sample4 from '../img/sampleImage4.png';
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
                A New Way to Charge
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

        </>
    )
}

export default HomeView;