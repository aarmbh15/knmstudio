import style from './OurTeam.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCircle } from "react-icons/fa";


import OurTeamCard from "./OurTeamCard/OurTeamCard";
// import Shailesh from "../../../../img/OurTeam/SHA02741.jpg";
import Sayali1  from "../../../../img/OurTeam/Sayali1.jpg";
import Yash1  from "../../../../img/OurTeam/Yash1.jpg";
import Sanjana1  from "../../../../img/OurTeam/Sanjana1.jpeg";
import Sudanshu1  from "../../../../img/OurTeam/Sudanshu1.jpg";
import Vinod1  from "../../../../img/OurTeam/Vinod1.jpeg";
import Mansi2  from "../../../../img/OurTeam/Mansi2.jpeg";

const OurTeam =() =>{
    const ourTeamData = [
        {
            key:3,
            src:Sayali1,
            name:"Sayali RasKar",
            role:"Chief Editor",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:4,
            src:Sudanshu1,
            name:"Sudanshu Sharma",
            role:"Operation Head",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:5,
            src:Vinod1,
            name:"Vinod Rathod",
            role:"Lead video editor",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:6,
            src:Sanjana1,
            name:"Sanjana Patankar",
            role:"video editor",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:7,
            src:Mansi2,
            name:"Mansi Gaurkar",
            role:"Growth Marketing Head",
            instaLink:"https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D",
            linkdinLink:"https://www.linkedin.com/company/knm-studio/" 
        },
        {
            key:9,
            src:Yash1,
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
                </div>
               
            </div>
        </>
    );
}
export default OurTeam;