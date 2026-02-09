import style from './HomeOurWork.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

import LOR from "../../../../video/BestWork/Natsha Shoot Loreal V7.mp4"
import LIVA from "../../../../video/BestWork/Liva mp4 .mp4"
import BBZ from "../../../../video/BestWork/BHarat Benz -100plus Bus Delivery.mp4"
import COM from "../../../../video/BestWork/Coffe Machine_2.mp4"
import ACT from "../../../../video/BestWork/ACTIMAX - CORE POLO - MASTER.mp4"
import MDC from "../../../../video/BestWork/Mens_DD_Cream.mp4"
import V25 from "../../../../video/BestWork/Varsha V25 Film.mp4"

import KnmButton from '../../../KnmButton/KnmButton';

import HomeOurWorkCard from './HomeOurWorkCard/HomeOurWorkCard';
const HomeOurWork =() =>{
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1400 ,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            }, 
            {
              breakpoint: 912 ,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            }
            
          ],
      };
 const ourWorkDATA= [
        {
               key:1,
               src:LOR,
               type:"Advertisement",
               title:"LOREAL"
        },
           {
               key:2,
               src:LIVA,
               type:"Advertisement",
               title:"LIVA"
        },
        {
               key:3,
               src:ACT,
               type:"E-Commerce",
               title:"ACTIMAX"
        },
        {
               key:4,
               src:MDC,
               type:"Advertisement",
               title:"AEGTE CREAM"
        },
        {
               key:5,
               src:COM,
               type:"Advertisement",
               title:"CROMA COFFEE MACHINE"
        },
        {
               key:6,
               src:BBZ,
               type:"Corporate Video",
               title:"BHARAT BANZ"
        },
        {
               key:7,
               src:V25,
               type:"Advertisement",
               title:"v25 Series"
        }
 ]

    return(
        <>  
            <div className={style.container}>
            <div className={style.textContainer}>
                  <div className={style.textContainerOne}>  
              <div className={style.sub}>
              <h3><FaCircle /></h3>
            <div className={style.subTitle}>
                    <div> OUR WORK</div>
                </div>
                </div>  
                <h3 className={style.divTitle}>OUR LATEST</h3>
                <div className={style.title}>
                <h1> AWESOME WORK</h1>
                </div>
                </div> 
                 <div className={style.textContainerTwo}>  
                <Link to="/our-work">
                         <KnmButton text="EXPLORE MORE" />
                      </Link>
                </div>
                </div>
                <div className={style.sliderContainer}>  
                      <Slider {...settings}>
                        {ourWorkDATA.map((el) =>(
                            <HomeOurWorkCard
                            key={el.key}
                            src={el.src}
                            type={el.type}
                            title={el.title}
                          />
                      ))}
                    </Slider>
                 </div>
                </div>
        </>
    );
}
export default HomeOurWork;