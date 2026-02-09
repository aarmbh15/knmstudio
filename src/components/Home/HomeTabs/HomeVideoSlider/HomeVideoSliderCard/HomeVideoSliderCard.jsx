import React, {useEffect}  from "react";
import style from './HomeVideoSliderCard.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "react-slick";

import One8 from '../../../../../video/One8.mp4'
import VIPChai from '../../../../../video/Payment At Tapri_VIPS Wallet.mp4'
import Actimax from '../../../../../video/ACTIMAX - BRAND MASTER.mp4'
import DevFest from '../../../../../video/Devfest 2022 with KNM studio.mp4'
import LipBalm from '../../../../../video/Lip Balm Female.mp4'
import MCEA from '../../../../../video/MCEA Event Teaser.mp4'

const HomeVideoSliderCard = (props ) =>{
    useEffect(() =>{
        AOS.init({duration:1400});
    },[]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear"
      };

    const VideoData=[
        {
            key:1,
            src:One8,
            title:"ONE 8 - ATTITUDE",
            subTitle:"⦿ Advertisement",
            discription:"Embracing the bold attitude that comes after wearing the undergarments of One8 Fearlessly conquer every challenge."
        },
        {
            key:2,
            src:MCEA,
            title:"MCA Award Night",
            subTitle:"⦿ Event Documentation",
            discription:"In recognition of their untapped potential, MCA decided to honor the ground and office staff of cricket clubs who lacked exposure opportunities"
        },
        {
            key:3,
            src:VIPChai,
            title:"VIPS Wallet - Tapri",
            subTitle:"⦿ TVC - Advertisement",
            discription:"Vips wallet provides a seamless platform for UPI transactions and serves as an e-commerce wallet for convenient online shopping"
        },
        {
            key:4,
            src:Actimax,
            title:"ACTIMAX",
            subTitle:"⦿ E - Commerce",
            discription:"Actimax, the upcoming sports wear brand, seamlessly combines comfort and style, making it unstoppable in delivering exceptional performance."
        },
        {
            key:5,
            src:LipBalm,
            title:"AEGTE - LIP",
            subTitle:"⦿Advertisement",
            discription:"Aegte's organic beetroot lip and cheek tint balm is one of the best-tinted lip gloss."
        },
        {
            key:6,
            src:DevFest,
            title:"GDG - DEV FEST",
            subTitle:"⦿ Event Documentation",
            discription:"Meet developers and technologists with diverse backgrounds and from various companies and industries."
        }

    ]
    return(
        <>  
         <div className={style.SliderContainer} >
   <Slider {...settings}  > 
        {VideoData.map((el) =>(
            <div className={style.containerHome} >
            <video src={`${el.src}`} autoPlay muted loop/>
               <div className={style.content}  data-aos="fade-up" >
               <div className={style.title}>
                        <div>{el.title}</div>
                    </div>
                    <div className={style.subTitle}>{el.subTitle}</div>
                    <div className={style.para}>{el.discription}</div>
               </div>
            </div>
          )) } 
    </Slider>   
    </div> 
        </>
    );
}
export default HomeVideoSliderCard;