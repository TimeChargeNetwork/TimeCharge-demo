import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    let facebookUrl="https://www.facebook.com/TimeChargeIncNetwork";
    let twitterUrl="https://twitter.com/TimeChargeNet";
    let instagramUrl="https://www.instagram.com/timechargenet/";

    return(
    <>
    <div className='footerContainer'>
        <h2 className='footerTitle'>TimeCharge LLC</h2>
        <Link to="/connect" className='footerLinks'>Contact Us</Link>
        <Link to="/invest" className='footerLinks'>Invest</Link>
        <br />
        <a href={facebookUrl} className='footerLinks'>Facebook</a>
        <a href={twitterUrl} className='footerLinks'>Twitter</a>
        <a href={instagramUrl} className='footerLinks'>Instagram</a>
    </div>
    </>
    )
}

export default Footer;