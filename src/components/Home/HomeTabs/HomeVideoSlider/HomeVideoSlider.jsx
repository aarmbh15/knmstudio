import React  from "react";
import style from'./HomeVideoSlider.module.css';
import HomeVideoSliderCard from "./HomeVideoSliderCard/HomeVideoSliderCard";
import HomeVideoSliderOps from "./HomeVideoSliderOps/HomeVideoSliderOps";



// import One8 from '../../../../video/One8.mp4'
// import One8 from '../../../../video/ACTIMAX - BRAND MASTER.mp4'

// import One8 from '../../../../video/One8.mp4'
// import Actimax from '../../../../video/ACTIMAX - BRAND MASTER.mp4'
// import Devfest from '../../../../video/Devfest 2022 with KNM studio.mp4'
// import MCFA from '../../../../video/MCEA Event Teaser.mp4'
// import Tapri from '../../../../video/Payment At Tapri_VIPS Wallet.mp4'


const HomeVideoSlider = () =>{
     
    return(
        <>
             <div className={style.container} >
                    <div className={style.isActive}>
                        <HomeVideoSliderCard />
                    </div>
             </div>
             {/* <div className={style.slider}>
                     <HomeVideoSliderOps source={Actimax} />
                     <HomeVideoSliderOps source={Tapri} />
             </div> */}
               
         

        </>
    );
}
export default HomeVideoSlider;