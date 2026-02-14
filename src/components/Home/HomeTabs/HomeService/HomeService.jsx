import React, {useEffect}  from "react";
import style from './HomeService.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceCard from './ServiceCard/ServiceCard';


import BrandIMG from  '../../../../img/ServiceICONS/Brand-development-icon.png';
import AdvIMG from  '../../../../img/ServiceICONS/advertisement-icon.png';
import CorVIMG from  '../../../../img/ServiceICONS/corporate-video-icon.png';
import EComIMG from  '../../../../img/ServiceICONS/E-commerce-icon.png';
import EventIMG from  '../../../../img/ServiceICONS/Events-icon.png';
import ExpVIMG from  '../../../../img/ServiceICONS/Explainer-video-icon.png';


const HomeService =() =>{
     useEffect(() =>{
          AOS.init({duration:1400});
      },[]);
    return(
        <>  
            <div className={style.container}>
                 <h3 className={style.title} >LET’S CHECK OUR SERVICES</h3>
                <div className={style.serviceCard}>
                    <ServiceCard  className={style.Card}
                         icon={<img src={BrandIMG} alt="digital marketing" width={150} />}     
                         ServiceTitle="DIGITAL MARKETING
                         " 
                         ServicePara="Trust us for crafting resonant brand identities through research, creative storytelling, and authentic narratives, setting you apart in India."
                    />
                    <ServiceCard  className={style.Card}
                         icon={<img src={AdvIMG} alt="ADVERTISEMENT" width={150} />}   
                         ServiceTitle="ADVERTISEMENT
                         " 
                         ServicePara="Crafting captivating ads that resonate with Indian market dynamics, our media production ignites action and delivers results, cutting through clutter."
                    />
                    <ServiceCard  className={style.Card}
                         icon={<img src={CorVIMG} alt="CORPORATE VIDEOS" width={150} />}  
                         ServiceTitle="CORPORATE VIDEOS
                         " 
                         ServicePara="Mastering corporate video production, we convey brand ethos through captivating visual narratives—leaving lasting impacts."
                    />
    
                    <ServiceCard  className={style.Card}
                         icon={<img src={EComIMG} alt="E-COMMERCE" width={150} />} 
                         ServiceTitle="E-COMMERCE
                         " 
                         ServicePara="Expertly crafting e-commerce shoots, breathing life into products, understanding Indian market aesthetics."
                    />
                    <ServiceCard  className={style.Card}
                         icon={<img src={EventIMG} alt="EVENTS" width={150} />} 
                         ServiceTitle="EVENTS
                         " 
                         ServicePara="Excelling in immortalizing emotions, we deliver event coverage that truly sets us apart from competitors."
                    /><ServiceCard  className={style.Card}
                         icon={<img src={ExpVIMG} alt="EXPLAINER VIDEO" width={150} />} 
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