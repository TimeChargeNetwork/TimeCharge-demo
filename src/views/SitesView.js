import MiaSkyline from '../img/Miami-Skyline.jpg';
import FLL from '../img/FLL.jpg';
import WPB from '../img/WPB.jpg';
import './SitesView.css';

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
            <div className='siteCard' style={{ backgroundImage: `url(${FLL})` }}>
                <div className='card-content'>
                    <h2 className='card-title'>
                        Ft. Lauderdale
                    </h2>
                </div>
            </div>
            <div className='siteCard' style={{ backgroundImage: `url(${WPB})` }}>
                <div className='card-content'>
                    <h2 className='card-title'>
                        West Palm Beach
                    </h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default SitesView;

