import style from './OurTeam.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCircle } from "react-icons/fa";


import OurTeamCard from "./OurTeamCard/OurTeamCard";
import Shailesh from "../../../../img/OurTeam/SHA02741.jpg";
import Sayali  from "../../../../img/OurTeam/SHA02701.jpg";
import Nikhil from "../../../../img/OurTeam/SHA02808.jpg";
import  Sarah from "../../../../img/OurTeam/SHA02599.jpg";
// Grafic Des
import Ashiwajbe from "../../../../img/OurTeam/SHA02623.jpg";
// Video Editor
import AlanaritiAhuja  from "../../../../img/OurTeam/SHA02648.jpg";
// Social; Media Manager
import DeepakBhalerao from "../../../../img/OurTeam/SHA02724.jpg";
// Video Editor
import YashAgrawal  from "../../../../img/OurTeam/SHA02760.jpg";
// Cinamatographer

const OurTeam =() =>{
    const ourTeamData = [
        // {
        //     key:2,
        //     src:Shailesh,
        //     name:"Shailesh Tilekar",
        //     role:"Creative Head",
        //     instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" ,
        //     linkdinLink:"https://www.linkedin.com/company/knm-studio/ "
        // },
        {
            key:3,
            src:Sayali,
            name:"Sayali RasKar",
            role:"Chief Editor",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:4,
            src:Nikhil,
            name:"Nikhil Inamke",
            role:"Corporate Head",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:5,
            src:Sarah,
            name:"Sarah",
            role:"Graphic Design",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:6,
            src:Ashiwajbe,
            name:"Ashwajit Gajbe",
            role:"Video Editor",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:7,
            src:AlanaritiAhuja,
            name:"Alankriti Ahuja",
            role:" Social Media Manager",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:8,
            src:DeepakBhalerao,
            name:"Deepak Bhalerao",
            role:"Video Editor",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:9,
            src:YashAgrawal,
            name:"Yash Agrawal",
            role:"Cinematographer",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 480 ,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            
          ],
      };
    return(
        <>  
            <div className={style.container}>
            <div className={style.sub}>
              <h3><FaCircle /></h3>
            <div className={style.subTitle}>
                    <div> Our Teams</div>    
                </div>
                </div> 
                <div className={style.title}>
                <h1> THE BEST TEAM EVER!</h1>
                </div>
               
                <div className={style.members}>
                {/* <Slider {...settings}> */}
                {ourTeamData.map((el) =>(
                    <OurTeamCard 
                    key={el.key}
                    src={el.src}
                    name={el.name}
                    role={el.role}
               />
                ))}

                     {/* <div className={style.member}>
                          <img className={style.cardImg} src={Sparsh} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Sparsh Agrawal</div>
                                    <div className={style.memberRole}> Founder </div>
                                    <div className={style.userSocialMedia}>
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
                                    </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Shailesh} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Shailesh Tilekar</div>
                                    <div className={style.memberRole}> Creative Head </div>
                                    <div className={style.userSocialMedia}>
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
                                    </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Sayali} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Sayali RasKar</div>
                                    <div className={style.memberRole}> Chief Editor  </div>
                                    <div className={style.userSocialMedia}>
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
                                    </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Nikhil} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Nikhil Inamke</div>
                                    <div className={style.memberRole}> Corporate Head </div>
                                    <div className={style.userSocialMedia}>
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
                                    </div>
                                </div>
                    </div>
                 */}
                    {/* </Slider> */}
                    <br/>
                    <br/>
                    {/* <Slider {...settings}>
                {ourTeamData.map((el) =>(
                    <OurTeamCard 
                    key={el.key}
                    src={el.src}
                    name={el.name}
                    role={el.role}
               />
               ))}
                </Slider> */}
                </div>
               
            </div>
        </>
    );
}
export default OurTeam;