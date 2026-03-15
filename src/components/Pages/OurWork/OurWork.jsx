import React, { useEffect, useState } from "react";
import style from "./OurWork.module.css";
import OurWorkCard from "./OurWorkCard/OurWorkCard";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// VIDEO IMPORTS
import One8 from "../../../video/One8.mp4";
import VIPChai from "../../../video/Payment At Tapri_VIPS Wallet.mp4";
import Actimax from "../../../video/ACTIMAX - BRAND MASTER.mp4";
import DevFest from "../../../video/Devfest 2022 with KNM studio.mp4";
import LipBalm from "../../../video/Lip Balm Female.mp4";
import MCEA from "../../../video/MCEA Event Teaser.mp4";

// IMAGE IMPORTS (OLD)
import ARaymondCSR from "../../../img/OurWorkThumnail/ARaymond csr.jpg";
import ARaymondSolar from "../../../img/OurWorkThumnail/ARaymonds solar plant.jpg";
import Dryfruits from "../../../img/OurWorkThumnail/Dryfruits.jpg";
import GodrejTypography from "../../../img/OurWorkThumnail/Godrej green front success Typography.jpg";
import GodrejGreens from "../../../img/OurWorkThumnail/Godrej Greens.jpg";
import GodrejQuality from "../../../img/OurWorkThumnail/Godrej Quality av.jpg";
import OPmobility from "../../../img/OurWorkThumnail/OPmobility (Manufacturing).jpg";
import Padcare from "../../../img/OurWorkThumnail/Padcare knm strategy.jpg";
import SukoonX300 from "../../../img/OurWorkThumnail/Sukoon x300.jpg";
import VivoV60 from "../../../img/OurWorkThumnail/Vivo V60.jpg";
import AraymondPlantII from "../../../img/OurWorkThumnail/A raymond Plant II.jpg";
import ElarisSuccessvideo from "../../../img/OurWorkThumnail/Elaris Success video.jpg";

// NEW IMAGE IMPORTS
import ABM from "../../../img/OurWorkThumnail/ABM.png";
import VIP from "../../../img/OurWorkThumnail/VIP.png";
import PLO from "../../../img/OurWorkThumnail/PLO.jpg";
import LOR from "../../../img/OurWorkThumnail/LOR.png";
import X90 from "../../../img/OurWorkThumnail/X90.png";
// import APM from "../../../img/OurWorkThumnail/APM.png";
import O8S from "../../../img/OurWorkThumnail/O8S.png";
import CBH from "../../../img/OurWorkThumnail/CBH.png";
import AMC from "../../../img/OurWorkThumnail/AMC.png";
import BHU from "../../../img/OurWorkThumnail/BHU.jpg";
import VFT from "../../../img/OurWorkThumnail/VFT.png";
import SPA from "../../../img/OurWorkThumnail/SPA.png";
import AMD from "../../../img/OurWorkThumnail/AMD.png";
import SPI from "../../../img/OurWorkThumnail/SPI.jpg";
import OAM from "../../../img/OurWorkThumnail/OAM.png";
import VFS from "../../../img/OurWorkThumnail/VFS.png";
import ASP from "../../../img/OurWorkThumnail/ASP.png";
import V25 from "../../../img/OurWorkThumnail/V25.png";
import ALK from "../../../img/OurWorkThumnail/ALK.png";
import LIVA from "../../../img/OurWorkThumnail/Liva.png";
import AEL from "../../../img/OurWorkThumnail/AEL.png";
import GHR from "../../../img/OurWorkThumnail/GHR.png";
import COL from "../../../img/OurWorkThumnail/COL.png";
import AMB from "../../../img/OurWorkThumnail/AMB.png";
import NP from "../../../img/OurWorkThumnail/NP.png";
// import MCAimg from "../../../img/OurWorkThumnail/MCA.png";
import VCN from "../../../img/OurWorkThumnail/VCN.png";
import DEV from "../../../img/OurWorkThumnail/DEV.png";
import COM from "../../../img/OurWorkThumnail/COM.png";
import APA from "../../../img/OurWorkThumnail/APA.png";
import PBCL from "../../../img/OurWorkThumnail/PBCL.png";
import BBE from "../../../img/OurWorkThumnail/BBE.png";
import V29 from "../../../img/OurWorkThumnail/V29.png";
import KUM from "../../../img/OurWorkThumnail/KUM.png";
import FSB from "../../../img/OurWorkThumnail/FSB.png";
import OOB from "../../../img/OurWorkThumnail/OOB.png";
import VDI from "../../../img/OurWorkThumnail/VDI.png";
import SHA from "../../../img/OurWorkThumnail/SHA.png";

const OurWork = () => {

  const [displayType,setDisplayType] = useState("ALL");

  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);

  const sliderSettings = {
    dots:false,
    infinite:true,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:7000,
    arrows:false,
    pauseOnHover:false
  };

  const VideoData = [
    {key:1,src:One8,title:"ONE 8 - ATTITUDE",subTitle:"⦿ Advertisement"},
    {key:2,src:MCEA,title:"MCA Award Night",subTitle:"⦿ Event Documentation"},
    {key:3,src:VIPChai,title:"VIPS Wallet",subTitle:"⦿ TVC - Advertisement"},
    {key:4,src:Actimax,title:"ACTIMAX",subTitle:"⦿ E-Commerce"},
    {key:5,src:LipBalm,title:"AEGTE - LIP",subTitle:"⦿ Advertisement"},
    {key:6,src:DevFest,title:"GDG - DEV FEST",subTitle:"⦿ Event"}
  ];

  const OurWorkDATAOne = [

{src:SukoonX300, Vtype:"Advertisement", title:"Sukoon X300"},
{src:VivoV60, Vtype:"Advertisement", title:"Vivo V60"},
{src:OPmobility, Vtype:"Corporate_Videos", title:"OPMobility Manufacturing"},
{src:ARaymondCSR, Vtype:"Corporate_Videos", title:"ARaymond CSR"},
{src:ARaymondSolar, Vtype:"Corporate_Videos", title:"ARaymond Solar Plant"},
{src:Padcare, Vtype:"Informative Videos", title:"Padcare Strategy"},
{src:GodrejGreens, Vtype:"Informative Videos", title:"Godrej Greens"},
{src:GodrejQuality, Vtype:"Corporate_Videos", title:"Godrej Quality AV"},
{src:GodrejTypography, Vtype:"Advertisement", title:"Godrej Typography"},
{src:Dryfruits, Vtype:"Advertisement", title:"Dry Fruits Campaign"},
{src:AraymondPlantII, Vtype:"Corporate_Videos", title:"A raymond Plant II"},
{src:ElarisSuccessvideo, Vtype:"Corporate_Videos", title:"Elaris Success video"},

    // NEW CARDS
{
                src:ABM,
                Vtype:"ECommerce",
                title:"ACTIMAX BRAND MASTER"
        },
        {
            src:PLO,
            Vtype:"Corporate_Videos",
            title:"Plastic Omnium"
        },
        {
            src:LOR,
            Vtype:"Advertisement",
            title:"Loreal Paris Rouge Signature"
        },
        {
                src:X90,
                Vtype:"Advertisement",
                title:"Vivo X90 Series"
        },
        {
            src:O8S,
            Vtype:"Advertisement",
            title:"One8 FUTURE"
        },
        {
            src:CBH,
            Vtype:"Advertisement",
            title:"Chota Don VIPS Wallet"
        },
        
        {
                src:AMC,
                Vtype:"ECommerce",
                title:"Aegte- Mens DD Cream"
        },
        {
            src:BHU,
            Vtype:"ECommerce",
            title:"Bhumiya-Shrikhand"
        },
        {
            src:VFT,
            Vtype:"Advertisement",
            title:"VIPS Finstock- Fortune Teller"
        },
        {
                src:SPA,
                Vtype:"Informative Videos",
                title:"Spardha School of Music 10000+"
        },
        {
            src:AMD,
            Vtype:"Corporate_Videos",
            title:"Amdocs"
        },
        {
            src:NP,
            Vtype:"Advertisement",
            title:"Vivo V23 with Neha Pendse"
        },
        {
            src:VDI,
            Vtype:"Advertisement",
            title:"VIPS Finstock- Diwali"
        },
        
        {
                src:VIP,
                Vtype:"Advertisement",
                title:"VIPS Wallet Tapri"
        },
        {
            src:SPI,
            Vtype:"Corporate_Videos",
            title:"Vivo Travel with Arnab Satara"
        },
        {
            src:OAM,
            Vtype:"Advertisement",
            title:"One8 Attitude"
        },
        {
                src:VFS,
                Vtype:"Advertisement",
                title:"VIPS - Right Time to Invest"
        },
        {
            src:ASP,
            Vtype:"ECommerce",
            title:"ACTIMAX Style With Pants"
        },
        {
            src:V25,
            Vtype:"Corporate_Videos",
            title:"Vivo V25"
        },
        
        {
                src:ALK,
                Vtype:"Corporate_Videos",
                title:"Alkegen"
        },
        {
            src:LIVA,
            Vtype:"Advertisement",
            title:"LIVA"
        },
        {
            src:AEL,
            Vtype:"ECommerce",
            title:"Aegte- Lip Balm"
        },
        {
                src:GHR,
                Vtype:"Events",
                title:"Godrej Hr Event"
        },
        {
            src:COL,
            Vtype:"Corporate_Videos",
            title:"Cologne Spa"
        },
        {
            src:AMB,
            Vtype:"ECommerce",
            title:"Aegte- Beard Growth Serum"
        },
        
        
        // {
        //         src:MCA,
        //         Vtype:"Events",
        //         title:"MCEA Award Night"
        // },
        {
            src:VCN,
            Vtype:"Events",
            title:"Vivo Champions Night"
        },
        {
            src:DEV,
            Vtype:"Events",
            title:"Devfest 2022 GDG"
        },
        {
                src:COM,
                Vtype:"Advertisement",
                title:"Coffee Machine Demo"
        },
        {
            src:APA,
            Vtype:"ECommerce",
            title:"ACTIMAX Pants MASTER"
        },
        {
            src:PBCL,
            Vtype:"Events",
            title:"PBCL"
        },
        
        {
                src:BBE,
                Vtype:"Corporate_Videos",
                title:"Bharat Benz 100+ Bus Delivery"
        },
        {
            src:V29,
            Vtype:"Advertisement",
            title:"Vivo V29e"
        },
        {
            src:KUM,
            Vtype:"ECommerce",
            title:"The Indie Earth"
        },
        {
                src:FSB,
                Vtype:"ECommerce",
                title:"FreeStyle - Sports Bra"
        },
        {
            src:OOB,
            Vtype:"Advertisement",
            title:"One8-ONE BEAT ONE RULE"
        },
        {
            src:SHA,
            Vtype:"Informative Videos",
            title:"Spardha School of Music"
        },

  ];

  return(
    <div className={style.mainContainer}>

      {/* HERO VIDEO SLIDER */}

      <div className={style.heroSliderSection}>
        <Slider {...sliderSettings}>

          {VideoData.map((video)=>(
            <div key={video.key} className={style.slideWrapper}>

              <video
                className={style.bgVideo}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video.src} type="video/mp4"/>
              </video>

              <div className={style.videoOverlay}>
                <div className={style.headerTextContent} data-aos="fade-up">

                  <span className={style.workTag}>OUR WORK</span>

                  <h1 className={style.mainVideoTitle}>
                    {video.title}
                  </h1>

                  <p className={style.videoSub}>
                    {video.subTitle}
                  </p>

                </div>
              </div>

            </div>
          ))}

        </Slider>
      </div>

      {/* GALLERY */}

      <div className={style.subContaierSecond}>

        <div className={style.subTitle}>
          SOME OF OUR BEST WORKS
        </div>

        <div className={style.subHead}>

          {["Advertisement","Events","Corporate_Videos","Informative Videos","ECommerce"].map((type)=>(
            <div
              key={type}
              className={displayType===type?style.subHeadActionACTIVE:style.subHeadAction}
              onClick={()=>setDisplayType(displayType===type?"ALL":type)}
            >
              {type.replace("_"," ")}
            </div>
          ))}

        </div>

        <div className={style.Dis}>

          {OurWorkDATAOne.map((el,index)=>(
            <OurWorkCard
              key={index}
              src={el.src}
              title={el.title}
              Vtype={el.Vtype}
              displayType={displayType}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default OurWork;