import './AboutView.css';
import { Link } from 'react-router-dom';
// import sampleImage from '../img/sampleImage.png';

const AboutView = () => {
    return (
        <>
        <div className='headerAbout'>
            <h2 className='AboutTitle'>
                About
            </h2>
        </div>
        <div className='batteryContainer'>
            <div className='battery'>
                <div className='top'></div>
                <div className='charge1'></div>
                <div className='charge2'></div>
                <div className='charge3'></div>
            </div>
        </div>
        <div className='whatIsTC-container'>
            <div className='whatIsTC-title'>
                <h2 className='whatIsTC-title-text'>
                    What Is TimeCharge?
                </h2>
            </div>
            <div className='whatIsTC-P'>
                <p>
                    TimeCharge is solving and building the future of Electric Vehicles
                    fast charging stations accross the U.S.
                </p>
                <p>
                    South Florida will be our kickstart <Link to="/sites"> location </Link>. As our company 
                    grows, locations will expand with it. Our MISSION is to scale accross the U.S. 
                    Bringing better quality, reliability and services to the EV fast charging industry.
                </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        </>
    )
}

export default AboutView;