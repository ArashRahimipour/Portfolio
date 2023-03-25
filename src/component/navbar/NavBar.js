import './NavBar.css';
import { useState } from 'react';
import {Link} from 'react-scroll';
import {FiPaperclip} from 'react-icons/fi';
import {AiOutlineProject} from 'react-icons/ai';
import {TbFileDescription} from 'react-icons/tb';
import {AiOutlineContacts} from 'react-icons/ai';
import {AiOutlineTool} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa';
import Resume from '../../photos/Resume.pdf';
// import {AiFillHome} from 'react-icons/ai';




const NavBar = () => {
    const [open, setOpen] = useState(false);
    const handelburger = () => setOpen(!open);


    return(
        <div className="container">
            <div className="title">
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link onClick={handelburger} smooth={true} to="about">About <TbFileDescription/></Link></li>
                    <li><Link onClick={handelburger} smooth={true} to="project">Projects <AiOutlineProject/></Link></li>
                    <li><Link onClick={handelburger} smooth={true} to="skill">Skills <AiOutlineTool/></Link></li>
                    <a href={Resume}>Resume<FiPaperclip/></a>
                    <li><Link onClick={handelburger} smooth={true} to="contact">Contact <AiOutlineContacts/></Link></li>
                </ul>
            </div>
        
            <div className='burger' onClick={handelburger}>
                {open ? (<FaTimes/>) : (<GiHamburgerMenu />)}
            </div>
        </div>
    )
}

export default NavBar;