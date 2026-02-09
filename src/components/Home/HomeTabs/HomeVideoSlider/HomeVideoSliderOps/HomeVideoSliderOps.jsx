import React, {useEffect}  from "react";
import style from './HomeVideoSliderOps.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


// import One8 from '../../../../../video/One8.mp4'

const HomeVideoSliderOps = (props ) =>{
    useEffect(() =>{
        AOS.init({duration:1400});
    },[]);
    return(
        <>  
            <div className={style.slidercontainer} >
            <video className={style.sliderVideo} src={props.source}
             muted loop 
            />
              
            </div>
        </>
    );
}
export default HomeVideoSliderOps;