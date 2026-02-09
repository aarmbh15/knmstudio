import style from './SocialMedia.module.css';

// Icons
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const SocialMedia = () =>{
    return(
        <>
            <div className={style.container}>
                <div className={style.links}>
                    <div className={style.link}>
                        <a 
                            href="https://www.youtube.com/channel/UCcsszrDCGe8kljS3OEPjKag" 
                            target="_blank" rel="noreferrer" >
                                <FaYoutube size={21} />
                        </a>
                    </div>
                    <div className={style.link}>
                        <a 
                            href="https://www.facebook.com/studios.knm" 
                            target="_blank" rel="noreferrer" >
                                <FaFacebookF size={21} />
                        </a>
                    </div>
                    <div className={style.link}>
                        <a 
                            href="https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" 
                            target="_blank" rel="noreferrer" >
                                <AiFillInstagram size={21} />
                        </a>
                    </div>
                    <div className={style.link}>
                        <a 
                            href="https://twitter.com/KNMstudiosmedia" 
                            target="_blank" rel="noreferrer" >
                                <BsTwitterX size={21} />
                        </a>
                    </div>
                    <div className={style.link}>
                        <a 
                            href="https://www.linkedin.com/company/knm-studio/ "
                            target="_blank" rel="noreferrer" >
                                <FaLinkedinIn size={21} />
                        </a>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.lineText}>FOLLOW US</div>
            </div>
        </>
    );
}
export default SocialMedia;

