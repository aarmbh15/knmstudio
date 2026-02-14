import React, {useEffect}  from "react";
import style from './HomeService.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceCard from './ServiceCard/ServiceCard';


const HomeService =() =>{
     useEffect(() =>{
          AOS.init({duration:500});
      },[]);
    return(
        <>  
            <div className={style.container}>
                 <h3 className={style.title} data-aos="zoom-in-up">OUR SERVICES</h3>
                <div className={style.serviceCard}>
                    <ServiceCard  className={style.Card}
                         ServiceTitle="DIGITAL MARKETING
                         " 
                         ServicePara="Trust us for crafting resonant brand identities through research, creative storytelling, and authentic narratives, setting you apart in India."
                    />
                    <ServiceCard  className={style.Card}
                         ServiceTitle="ADVERTISEMENT
                         " 
                         ServicePara="Crafting captivating ads that resonate with Indian market dynamics, our media production ignites action and delivers results, cutting through clutter."
                    />
                    <ServiceCard  className={style.Card}
                         ServiceTitle="CORPORATE VIDEOS
                         " 
                         ServicePara="Mastering corporate video production, we convey brand ethos through captivating visual narratives—leaving lasting impacts."
                    />
    
                    <ServiceCard  className={style.Card}
                         ServiceTitle="E-COMMERCE
                         " 
                         ServicePara="Expertly crafting e-commerce shoots, breathing life into products, understanding Indian market aesthetics."
                    />
                    <ServiceCard  className={style.Card}
                         ServiceTitle="EVENTS
                         " 
                         ServicePara="Excelling in immortalizing emotions, we deliver event coverage that truly sets us apart from competitors."
                    /><ServiceCard  className={style.Card}
                    ServiceTitle="EXPLAINER VIDEO
                    " 
                    ServicePara="We craft engaging explainer videos, simplify concepts, promote products, and captivate audiences effectively."
               />
                </div>


            </div>
        </>
    );
}
export default HomeService;