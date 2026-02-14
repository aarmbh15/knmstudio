import React, {useEffect, useState}   from "react";
import style from './AboutUs.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiLightbulbLight } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { SlLayers } from "react-icons/sl";
import { TbBinaryTree } from "react-icons/tb";      
import { RiArrowDropDownLine } from "react-icons/ri";

import OurTeam from "./OurTeam/OurTeam";
import Sparsh from "../../../img/OurTeam/sparsh.jpeg";
const ABOUT = () =>{
    const [sliderToggle , setSliderToggle] =useState(0);

    useEffect(() =>{
        AOS.init({duration:400});
    },[]);
    return(
        <>
        <div className={style.mainContainer} >
        <div className={style.subContaierOne}>
                <div className={style.title} data-aos="fade-down" >
                    <div>BEYOND WORDS. <br /> <span className={style.titleHead}>WE TELL YOUR STORY IN PICTURES </span></div>
                    
                </div>
                <div className={style.para}data-aos="fade-down" >Empowering businesses through captivating ads, commercial video production, corporate videos,
                event coverage,digital marketing, and e-commerce solutions.
                Discover the untapped potential
                of visual storytelling with us and redefine communication for lasting success.
                </div>
                <div className={style.callForAction}></div>
            </div>
            {/* <div className={style.subContaierOne}>  
            <div className={style.overlay}></div>  
                <div className={style.title} data-aos="fade-down" > 
                    Beyond Words. We Tell Your Story in Pictures.<br /> <span className={style.titleHead}>Discover the untapped potential
of visual storytelling with us and redefine communication for lasting success.
</span>
                    
                </div>
                <div className={style.callForAction}></div>
            </div> */}
            <div className={style.subContaierSecond} data-aos="zoom-in-down">
                <div className={style.subContaierSecondHead}>HELPING BUISNESSES TO BRING <br />THERE CREATIVE PROJECTS TO LIFE</div>
                <p>At KNM Studio, we empower businesses through a comprehensive range of services, including captivating advertisement, corporate videos, event coverage, digital marketing, and e-commerce solutions. Our visual storytelling expertise uncovers untapped potential, while redefining communication for enduring success. We unleash the true potential of your brand, elevating it to new heights in the market. From crafting compelling advertisements to creating impactful corporate videos, capturing memorable events, building strong brands, and enabling seamless e-commerce experiences, we've got you covered. Experience the transformative power of video production with KNM Studio.</p>
            </div>


            <div className={style.subContaierThird} data-aos="zoom-in-down">
                <div className={style.subContaierThirdCard} data-aos="zoom-in-down">
                    <div className={style.subContaierThirdCardHead} data-aos="zoom-in-down"><PiLightbulbLight size={40}/> <span className={style.mainHead}>  OUR VISION</span> </div>
                    <div className={style.subContaierThirdCardPara} data-aos="zoom-in-down">At KNM Studio, our vision is to become the leading visual consultancy in India, setting the standard 
                            for excellence in the industry. We are dedicated to offering top-tier visual production services, 
                            delivering comprehensive solutions tailored to our clients' varied needs. By embracing innovation, 
                            creativity, and state-of-the-art technology, we aim to create compelling visual stories that engage 
                            audiences and propel brands to unprecedented levels of success. With an unwavering 
                            commitment to perfection, we strive to be the preferred partner for businesses in search of 
                            outstanding visual consultancy services, making a lasting impact in their respective fields.</div>
                </div>
                <div className={style.subContaierThirdCard} data-aos="zoom-in-down">
                     <div className={style.subContaierThirdCardHead} data-aos="zoom-in-down">  < SlLayers size={40}/> <span className={style.mainHead}> OUR GOALS </span> </div>
                    <div className={style.subContaierThirdCardPara} data-aos="zoom-in-down">
                    At KNM Studio, our mission is to empower businesses worldwide through the transformative power 
                            of visual storytelling. We strive to create captivating narratives, produce compelling content, and 
                            explore innovative possibilities. By uncovering untapped potential, we aim to redefine 
                            communication and elevate brands to new heights, driving remarkable achievements across 
                            industries.
                    </div>
                </div>
                
            </div>
            <div className={style.subContaierSecondPHN} data-aos="zoom-in-down">
            <div className={style.subParameters}>
                        <div className={style.aboutParameters}>
                            <div className={style.subAboutParameters} onClick={() => 
                                sliderToggle !== 1? setSliderToggle(1) : setSliderToggle(0)}>
                                    <div className={style.subAboutParametersIcon}>
                                         < SlLayers size={32}/>
                                    </div>
                                    <div className={style.subAboutParametersHeading}>
                                    OUR VISION
                                     </div>
                                     <div className={style.subAboutParametersBtnIcon}>
                                     <RiArrowDropDownLine size={32}/>
                                     </div>  
                            </div>
                            <div className={sliderToggle === 1 ? `${style.aboutParametersPARA} ${style.aboutParametersPARAActive}` :`${style.aboutParametersPARA}`}>
                            At KNM Studio, our vision is to become the leading visual consultancy in India, setting the standard 
                            for excellence in the industry. We are dedicated to offering top-tier visual production services, 
                            delivering comprehensive solutions tailored to our clients' varied needs. By embracing innovation, 
                            creativity, and state-of-the-art technology, we aim to create compelling visual stories that engage 
                            audiences and propel brands to unprecedented levels of success. With an unwavering 
                            commitment to perfection, we strive to be the preferred partner for businesses in search of 
                            outstanding visual consultancy services, making a lasting impact in their respective fields.
                            </div>  
                        </div>
                     </div>
                     <div className={style.subParameters}>
                        <div className={style.aboutParameters}>
                            <div className={style.subAboutParameters} onClick={() => 
                                sliderToggle !== 2 ? setSliderToggle(2) : setSliderToggle(0)}>
                                    <div className={style.subAboutParametersIcon}>
                                         <TbBinaryTree size={32}/>
                                    </div>
                                    <div className={style.subAboutParametersHeading}>
                                    OUR GOALS
                                     </div>
                                     <div className={style.subAboutParametersBtnIconAdv}>
                                     <RiArrowDropDownLine size={32}/>
                                     </div>  
                            </div>
                            <div className={sliderToggle === 2 ? `${style.aboutParametersPARA} ${style.aboutParametersPARAActive}` :`${style.aboutParametersPARA}`}>
                            At KNM Studio, our mission is to empower businesses worldwide through the transformative power 
                            of visual storytelling. We strive to create captivating narratives, produce compelling content, and 
                            explore innovative possibilities. By uncovering untapped potential, we aim to redefine 
                            communication and elevate brands to new heights, driving remarkable achievements across 
                            industries.
                            </div>  
                        </div>
                     </div>
                     
                </div>
             

            <div className={style.subContaierForth}  data-aos="zoom-in-down">
 <div className={style.subContaierForthCardContent}>
                    <div className={style.subContaierForthCardPara} >
                    <div className={style.subContaierThirdCardHead}>  < FaUserAlt size={35}/> <span className={style.mainHead}> FOUNDER STATEMENT
 </span> </div>
                    Formerly a dedicated cinematographer, Sparsh Agrawal now leads Pune's premier visual
consultancy firm within just three years. With a diverse clientele spanning electronics, automobiles,
fashion, publications, and real estate, Sparsh's passion lies in continuous learning and growth. He
closely collaborates with clients, understanding their needs to deliver impactful visual solutions.
Known for his mentorship in video creation, Sparsh fosters growth both professionally and
personally. Outside work, he finds joy in spending time with friends, traveling, and meditation. His
dedication ensures his company stands out in the industry, leaving a lasting impression.
                    </div>
                    <div className={style.subContaierThirdCardImg} >
                    <img className={style.forthCardImg} src={Sparsh} alt="knmStudioTeam" width={380} height={360} />
                    </div>    

                    </div>    

                </div>    
            <div className={style.ourTeam}>
                <OurTeam />
            </div>        
        </div>   
        </>
    );
}
export default ABOUT;