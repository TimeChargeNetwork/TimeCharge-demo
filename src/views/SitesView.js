import MiaSkyline from '../img/Miami-Skyline.jpg';
import './SitesView.css';
import React from 'react';

const SitesView = () => {
    return(
        <>
        <div className='header2'>
            <h2 className='sitesTitle'>
                Sites
            </h2>
        </div>
        <div className='cardContainer'>
            <div className='siteCard' style={{ backgroundImage: `url(${MiaSkyline})` }}>
                <div className='card-content'>
                    <h2 className='card-title'>
                        Miami
                    </h2>
                </div>
            </div>
            <p className='sitesP'>
                Our kickstart location will take place in the second State with the most EVs...
                <br />
                Miami, Florida 
            </p>
        </div>
        </>
    )
}

export default SitesView;

