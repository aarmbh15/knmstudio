import React, {useEffect}  from "react";
import style from './ServiceCard.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesCard = (props ) =>{
    useEffect(() =>{
        AOS.init({duration:1000});
    },[]);
    return(
        <>  
            <div className={style.container}>
                <div className={style.serviceTitle}>
                {props.ServiceTitle}
                </div>
                <div className={style.servicePara}>
                {props.ServicePara}
                </div>
            </div>
        </>
    );
}
export default ServicesCard;