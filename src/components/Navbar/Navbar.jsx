import React, {useState} from "react";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import KnmLOGO from "../../img/KNM_LOGO.png";
const NAVBAR = () =>{
    const [navToggle , setNavToggle] = useState(false);

    // Bg-Color
    const [bgColor , setBgColor] = useState(false);
     
    const changeBgColor = ()=>{
        if (window.scrollY  >= 90) {
            setBgColor(true);
        }else{
            setBgColor(false);
        }
    }
    window.addEventListener('scroll' , changeBgColor);

    return (
        <>
           <header className={bgColor ? `${style.headerBg}` : ''} >
            <div className={navToggle ? `${style.headerBg} ${style.navbar}` : `${style.navbar}`} >
                <div className={style.logo}>
                        <img src={KnmLOGO} alt="knmStudio" height={90}  />
                </div>
                <ul className={style.links}>
                    <li className={style.link}><Link to="/">Home</Link></li>
                    <li className={style.link}><Link to="/about-us">About Us</Link></li>
                    <li className={style.link}><Link to="/services">Services</Link></li>
                    <li className={style.link}><Link to="/our-work">Our Work</Link></li>
                    <li className={style.link}><Link to="/blogs">Blogs</Link></li>
                    <li className={style.link}><Link to="/contact-us">Contact Us</Link></li>
                </ul>
                <Link to="/contact-us">
                   <div className={style.actionBtn}>
                     Start a Project
                   </div>
                </Link>
                <div className={style.toggleNav} onClick={() => setNavToggle(!navToggle)}>
                    {!navToggle ? <GiHamburgerMenu size={27} />:<IoClose size={27} />}
                </div>
            </div>   
                {/* DropDown */}
                <div className={!navToggle ? `${style.dropDownInActive}` : `${style.dropDownActive}`} onClick={() => setNavToggle(!navToggle)}>
                <div className={style.dropDown}>
                <li className={style.link}><Link to="/">Home</Link></li>
                    <li className={style.link}><Link to="/about-us">About Us</Link></li>
                    <li className={style.link}><Link to="/services">Services</Link></li>
                    <li className={style.link}><Link to="/our-work">Our Work</Link></li>
                    <li className={style.link}><Link to="/blogs">Blogs</Link></li>
                    <li className={style.link}><Link to="/contact-us">Contact Us</Link></li>
                    <li className={style.link}>  <div className={style.actionBtn}>
                    Start a Project
                     </div></li>
                </div>
            </div>
           </header>
        </>
    );
}
export default NAVBAR;
