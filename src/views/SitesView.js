import MiaSkyline from '../img/Miami-Skyline.jpg';
import './SitesView.css';

const SitesView = () => {
    return(
        <>
        <div className='header2'>
            <h2 className='sitesTitle'>
                Sites
            </h2>
        </div>
        <div className='siteCard' style={{ backgroundImage: `url(${MiaSkyline})` }}>
            <div className='card-content'>
                <h2 className='card-title'>
                    Miami
                </h2>
            </div>
        </div>
        </>
    )
}

export default SitesView;

