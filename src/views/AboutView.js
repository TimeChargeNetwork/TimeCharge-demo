import './AboutView.css';
import { Link } from 'react-router-dom';
import charger from '../img/TC CHARGER.png';
import chargerBack from '../img/TRIVIUM CHARGER BACK DESIGN 1.png';
import React from 'react';

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
                    Miami, FL will be our kickstart <Link to="/sites"> location </Link>. As our company 
                    grows, locations will expand with it. Our mission is to scale accross the U.S. 
                    Bringing better quality, reliability and services to the EV fast charging industry.
                </p>
            </div>
        </div>
        <div className='stage-container'>
            <div className='stage-title'>
                <h2 className='stage-text'>
                    Our Stage?
                </h2>
            </div>
            <div className='stage-P'>
                <p>
                    Our battery is charged to make the charging experience we all know, better.
                </p>
                <p>
                    Our strategic million dollar investments are making those efforts become reality. 
                    By creating a revolutionary makeover of charging expenses and bussiness plan.
                    we are in the mid of our funding cycle. Our plans are to start opening stations by
                    the second half of 2023.
                </p>
                <p>
                    If you are interested to contribute to this exciting and revolutionizing startup.
                    Check out our <Link to="/invest"> Invest </Link> page.
                </p>
            </div>
        </div>
        <div className='charger-title'>
            <h2 className='charger-text'>Our Chargers</h2>
        </div>
        <div className='chargerContainer'>
            <img src={charger} className="chargerFront" alt='chargerFront'/>
            <img src={chargerBack} className="chargerBack" alt='chargerBack'/>
        </div>
        <div className='chargers-p'>
            <p>TimeCharge chargers will be aquired from our great partner TRITIUM. Our level 3 
            fast chargers will be capabe of producing 175kw per charger and up to 87kw for two cars
            charging at the same time!
            </p>
            <br />
            <p>
                Using TRITIUM chargers not only makes TimeCharge provide charging time to be as fast as possible, but also
                maintain an incredibly reliable service.
            </p>
        </div>
        </>
    )
}

export default AboutView;