import './AboutView.css';
import sampleImage from '../img/sampleImage.png';

const AboutView = () => {
    return (
        <>
        <div className='header2'>
            <h2 className='aboutTitle'>
                About
            </h2>
        </div>
        <div className='boxContainer'>
            <div className='box'>
            <p className='aboutText'>
                This is all about the about this is just examples for us
                to understant how all of the neccessary things will
                follow along so that we have an understanding of how this
                will be seen as from the consumer's perspective
            </p>
            <img src={sampleImage} alt="sample1" className='aboutImage'/>
            </div>
            <div className='box'>
            <p className='aboutText'>
                This is all about the about this is just examples for us
                to understant how all of the neccessary things will
                follow along so that we have an understanding of how this
                will be seen as from the consumer's perspective
            </p>
            <img src={sampleImage} alt="sample1" className='aboutImage'/>
            </div>
        </div>
        </>
    )
}

export default AboutView;