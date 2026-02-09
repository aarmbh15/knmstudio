import React, {useEffect, useState}   from "react";
import style from "./OurWork.module.css";

import OurWorkCard from './OurWorkCard/OurWorkCard';

import AOS from 'aos';
import 'aos/dist/aos.css';


import ABM from '../../../img/OurWorkThumnail/ABM.png';
import VIP from '../../../img/OurWorkThumnail/VIP.png';
import PLO from '../../../img/OurWorkThumnail/PLO.jpg';
import LOR from '../../../img/OurWorkThumnail/LOR.png';
import X90 from '../../../img/OurWorkThumnail/X90.png';
import APM from '../../../img/OurWorkThumnail/APM.png';
import O8S from '../../../img/OurWorkThumnail/O8S.png';
import CBH from '../../../img/OurWorkThumnail/CBH.png';
import AMC from '../../../img/OurWorkThumnail/AMC.png';
import BHU from '../../../img/OurWorkThumnail/BHU.jpg';
import VFT from '../../../img/OurWorkThumnail/VFT.png';
import SPA from '../../../img/OurWorkThumnail/SPA.png';
import AMD from '../../../img/OurWorkThumnail/AMD.png';
import SPI from '../../../img/OurWorkThumnail/SPI.jpg';
import OAM from '../../../img/OurWorkThumnail/OAM.png';
import VFS from '../../../img/OurWorkThumnail/VFS.png';
import ASP from '../../../img/OurWorkThumnail/ASP.png';
import V25 from '../../../img/OurWorkThumnail/V25.png';
import ALK from '../../../img/OurWorkThumnail/ALK.png';
import LIVA from '../../../img/OurWorkThumnail/Liva.png';
import AEL from '../../../img/OurWorkThumnail/AEL.png';
import GHR from '../../../img/OurWorkThumnail/GHR.png';
import COL from '../../../img/OurWorkThumnail/COL.png';
import AMB from '../../../img/OurWorkThumnail/AMB.png';
import NP from '../../../img/OurWorkThumnail/NP.png';
import MCA from '../../../img/OurWorkThumnail/MCA.png';
import VCN from '../../../img/OurWorkThumnail/VCN.png';
import DEV from '../../../img/OurWorkThumnail/DEV.png';
import COM from '../../../img/OurWorkThumnail/COM.png';
import APA from '../../../img/OurWorkThumnail/APA.png';
import PBCL from '../../../img/OurWorkThumnail/PBCL.png';
import BBE from '../../../img/OurWorkThumnail/BBE.png';
import V29 from '../../../img/OurWorkThumnail/V29.png';
import KUM from '../../../img/OurWorkThumnail/KUM.png';
import FSB from '../../../img/OurWorkThumnail/FSB.png';
import OOB from '../../../img/OurWorkThumnail/OOB.png';
import VDI from '../../../img/OurWorkThumnail/VDI.png';
import SHA from '../../../img/OurWorkThumnail/SHA.png';

const OurWork = () =>{
    const [displayType, setDisplayType] = useState("ALL");

    useEffect(() =>{
        AOS.init({duration:500});
    },[]);

    const OurWorkDATAOne =[
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Vivo X300"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Vivo V60"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"OPmobilty (Manufacturing)"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"ARaymond"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Padcare"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Godrej Grenns"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Godrej Quality wheel"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Dryfruits"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Kensha"
        },
        {
            src:ABM,
            Vtype:"ECommerce",
            title:"Godrej success Typography"
        },
        // {
        //         src:ABM,
        //         Vtype:"ECommerce",
        //         title:"ACTIMAX BRAND MASTER"
        // },
        // {
        //     src:PLO,
        //     Vtype:"Corporate_Videos",
        //     title:"Plastic Omnium"
        // },
        // {
        //     src:LOR,
        //     Vtype:"Advertisement",
        //     title:"Loreal Paris Rouge Signature"
        // },
        // {
        //         src:X90,
        //         Vtype:"Advertisement",
        //         title:"Vivo X90 Series"
        // },
        // {
        //     src:O8S,
        //     Vtype:"Advertisement",
        //     title:"One8 FUTURE"
        // },
        // {
        //     src:CBH,
        //     Vtype:"Advertisement",
        //     title:"Chota Don VIPS Wallet"
        // },
        
        // {
        //         src:AMC,
        //         Vtype:"ECommerce",
        //         title:"Aegte- Mens DD Cream"
        // },
        // {
        //     src:BHU,
        //     Vtype:"ECommerce",
        //     title:"Bhumiya-Shrikhand"
        // },
        // {
        //     src:VFT,
        //     Vtype:"Advertisement",
        //     title:"VIPS Finstock- Fortune Teller"
        // },
        // {
        //         src:SPA,
        //         Vtype:"Informative Videos",
        //         title:"Spardha School of Music 10000+"
        // },
        // {
        //     src:AMD,
        //     Vtype:"Corporate_Videos",
        //     title:"Amdocs"
        // },
        // {
        //     src:NP,
        //     Vtype:"Advertisement",
        //     title:"Vivo V23 with Neha Pendse"
        // },
        // {
        //     src:VDI,
        //     Vtype:"Advertisement",
        //     title:"VIPS Finstock- Diwali"
        // },
        
        // {
        //         src:VIP,
        //         Vtype:"Advertisement",
        //         title:"VIPS Wallet Tapri"
        // },
        // {
        //     src:SPI,
        //     Vtype:"Corporate_Videos",
        //     title:"Vivo Travel with Arnab Satara"
        // },
        // {
        //     src:OAM,
        //     Vtype:"Advertisement",
        //     title:"One8 Attitude"
        // },
        // {
        //         src:VFS,
        //         Vtype:"Advertisement",
        //         title:"VIPS - Right Time to Invest"
        // },
        // {
        //     src:ASP,
        //     Vtype:"ECommerce",
        //     title:"ACTIMAX Style With Pants"
        // },
        // {
        //     src:V25,
        //     Vtype:"Corporate_Videos",
        //     title:"Vivo V25"
        // },
        
        // {
        //         src:ALK,
        //         Vtype:"Corporate_Videos",
        //         title:"Alkegen"
        // },
        // {
        //     src:LIVA,
        //     Vtype:"Advertisement",
        //     title:"LIVA"
        // },
        // {
        //     src:AEL,
        //     Vtype:"ECommerce",
        //     title:"Aegte- Lip Balm"
        // },
        // {
        //         src:GHR,
        //         Vtype:"Events",
        //         title:"Godrej Hr Event"
        // },
        // {
        //     src:COL,
        //     Vtype:"Corporate_Videos",
        //     title:"Cologne Spa"
        // },
        // {
        //     src:AMB,
        //     Vtype:"ECommerce",
        //     title:"Aegte- Beard Growth Serum"
        // },
        
        
        // {
        //         src:MCA,
        //         Vtype:"Events",
        //         title:"MCEA Award Night"
        // },
        // {
        //     src:VCN,
        //     Vtype:"Events",
        //     title:"Vivo Champions Night"
        // },
        // {
        //     src:DEV,
        //     Vtype:"Events",
        //     title:"Devfest 2022 GDG"
        // },
        // {
        //         src:COM,
        //         Vtype:"Advertisement",
        //         title:"Coffee Machine Demo"
        // },
        // {
        //     src:APA,
        //     Vtype:"ECommerce",
        //     title:"ACTIMAX Pants MASTER"
        // },
        // {
        //     src:PBCL,
        //     Vtype:"Events",
        //     title:"PBCL"
        // },
        
        // {
        //         src:BBE,
        //         Vtype:"Corporate_Videos",
        //         title:"Bharat Benz 100+ Bus Delivery"
        // },
        // {
        //     src:V29,
        //     Vtype:"Advertisement",
        //     title:"Vivo V29e"
        // },
        // {
        //     src:KUM,
        //     Vtype:"ECommerce",
        //     title:"The Indie Earth"
        // },
        // {
        //         src:FSB,
        //         Vtype:"ECommerce",
        //         title:"FreeStyle - Sports Bra"
        // },
        // {
        //     src:OOB,
        //     Vtype:"Advertisement",
        //     title:"One8-ONE BEAT ONE RULE"
        // },
        // {
        //     src:SHA,
        //     Vtype:"Informative Videos",
        //     title:"Spardha School of Music"
        // },
        
        
    ]
    return(
        
        <>
          <div className={style.mainContainer}>
            <div className={style.subContaierOne}>
              
                <div className={style.title} 
                data-aos="fade-up"
                >
                      <div className={style.overlay}></div>
                    <div> <span className={style.titleSubHead} >OUR WORK</span>
                    <br /> 
                    <span className={style.titleHead}>
                        EXPLORE, VISUALISE, CREATE
                    </span></div>
                    
                </div>
                     <div className={style.callForAction}></div>
            </div>
            {/* Second Container */}
           
             <div className={style.subContaierSecond}  data-aos="fade-down" >
                <div className={style.subTitle} >SOME OF OUR BEST WORKS
                </div>   
                <div className={style.subHead}>

                    <div className={displayType === "Advertisement" ? `${style.subHeadActionACTIVE}` : `${style.subHeadAction}`}  onClick={() => 
                                displayType !== "Advertisement"? setDisplayType("Advertisement") : setDisplayType("ALL")}>ADVERTISEMENT 
                        
                    </div>||
                     
                    
                    <div className={displayType === "Events" ? `${style.subHeadActionACTIVE}` : `${style.subHeadAction}`}  onClick={() => 
                                displayType !== "Events"? setDisplayType("Events") : setDisplayType("ALL")}>EVENTS 
                         
                    </div>||
                     
                    
                    <div className={displayType === "Corporate_Videos" ? `${style.subHeadActionACTIVE}` : `${style.subHeadAction}`}  onClick={() => 
                                displayType !== "Corporate_Videos"? setDisplayType("Corporate_Videos") : setDisplayType("ALL")}>CORPORATE VIDEOS 
                         
                    </div>||
                     
                    
                    <div className={displayType === "Informative Videos" ? `${style.subHeadActionACTIVE}` : `${style.subHeadAction}`}  onClick={() => 
                                displayType !== "Informative Videos"? setDisplayType("Informative Videos") : setDisplayType("ALL")}>INFORMATIVE VIDEOS 
                         
                    </div>||
                      
                    
                    <div className={displayType === "ECommerce" ? `${style.subHeadActionACTIVE}` : `${style.subHeadAction}`}  onClick={() => 
                                displayType !== "ECommerce"? setDisplayType("ECommerce") : setDisplayType("ALL")}>E-COMMERCE
                    </div>
                
                </div>   
                <div className={style.Dis}>
                    {OurWorkDATAOne.map((el) =>(
                        // displayType === "ALL" ?
                        <OurWorkCard 
                            key={el.key}
                            src={el.src}
                            title={el.title}
                            Vtype={el.Vtype}
                            displayType={displayType}
                        /> 
                    //     displayType === el.Vtype ?
                    //     <OurWorkCard 
                    //     key={el.key}
                    //     src={el.src}
                    //     title={el.title}
                    //     Vtype={el.Vtype}
                    //     displayType={displayType}
                    // /> : null

                ))}  
                  </div>
             </div>   

         </div>   
        </>
    );
}
export default OurWork ;