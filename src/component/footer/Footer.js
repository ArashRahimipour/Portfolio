import './Footer.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <a href="https://www.linkedin.com/in/arash-rahimipour-3061b124b/"><AiFillLinkedin className='link'/></a>
                <a herf="/"><BsGithub className='link'/></a>
            </div>
            <h2 className='last'>Site made with React.js</h2>
        </div>
    )
}

export default Footer;