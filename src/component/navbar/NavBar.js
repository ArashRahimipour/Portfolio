import './NavBar.css';
import { useState } from 'react';
import {Link} from 'react-scroll';
import {BsPaperclip} from 'react-icons/bs';
import {AiOutlineProject} from 'react-icons/ai';
import {TbFileDescription} from 'react-icons/tb';
import {AiOutlineContacts} from 'react-icons/ai';
import {AiOutlineTool} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const handelburger = () => setOpen(!open);

    return(
        <div className="container">
            <div className="title">
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link smooth={true} to="about">About <TbFileDescription/></Link></li>
                    <li><Link smooth={true} to="project">Projects <AiOutlineProject/></Link></li>
                    <li><Link smooth={true} to="skill">Skills <AiOutlineTool/></Link></li>
                    <li><Link smooth={true} to="resume">Resume <BsPaperclip/></Link></li>
                    <li><Link smooth={true} to="contact">Contact <AiOutlineContacts/></Link></li>
                </ul>
            </div>

            <div className='burger' onClick={handelburger}>
                {open ? (<FaTimes/>) : (<GiHamburgerMenu />)}
            </div>
        </div>
    )
}

export default NavBar;