import style from './OurTeamCard.module.css';
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const OurTeamCard =(props) =>{
    // console.log("Tests");
    return(
        <>  
        <div className={style.member}>
                    <div className={style.memberImg}>
                          <img className={style.cardImg} src={`${props.src}`} alt="knmStudioTeam" />
                    </div>      
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>{props.name}</div>
                                    <div className={style.memberRole}>{props.role}</div>
                                    {/* <div className={style.userSocialMedia}>
                                        <div className={style.userSocialMediaIcons}>
                                            <a 
                                               href="https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" 
                                               target="_blank" rel="noreferrer" >
                                                <AiFillInstagram size={25} />
                                            </a>
                                        </div>
                                        <div className={style.userSocialMediaIcons}>
                                             <a 
                                               href="https://www.linkedin.com/company/knm-studio/ "
                                               target="_blank" rel="noreferrer" >
                                              <FaLinkedinIn size={25} />
                                             </a>
                                        </div>
                                    </div> */}
                                </div>
                    </div>

        </>
    );
}
export default OurTeamCard;