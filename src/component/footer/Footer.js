import './Footer.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <a href="https://www.linkedin.com/in/arash-rahimipour-3061b124b/"><AiFillLinkedin className='link'/></a>
                <a href="https://github.com/ArashRahimipour"><BsGithub className='link'/></a>
            </div>
            <h2 className='last'>website made by React ©2022 Arash Rahimipour </h2>
        </div>
    )
}

export default Footer;