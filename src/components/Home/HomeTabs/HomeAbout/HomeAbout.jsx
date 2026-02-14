import { useState, useMemo } from 'react';

import style from './HomeAbout.module.css';
import { FaCircle } from "react-icons/fa";

import Countup from 'react-countup';
import SrcollTrigger from 'react-scroll-trigger';

import { PiLightbulbLight } from "react-icons/pi";
import { SlLayers } from "react-icons/sl";
import { TbBinaryTree } from "react-icons/tb";      
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscDash } from "react-icons/vsc";

const HomeAbout = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [sliderToggle, setSliderToggle] = useState(0);

    // Dynamic month calculation
    const totalMonths = useMemo(() => {
        const startDate = new Date(2021, 8, 1); // Sept is index 8 (0-indexed)
        const today = new Date();
        
        const yearsDiff = today.getFullYear() - startDate.getFullYear();
        const monthsDiff = today.getMonth() - startDate.getMonth();
        
        // Total months = (Years * 12) + Month difference
        return (yearsDiff * 12) + monthsDiff;
    }, []);

    return (
        <>  
            <SrcollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                <div className={style.container}>
                    <div className={style.subContainer} data-aos="fade-right">
                        <div className={style.sub}>
                            <h3><FaCircle /></h3>
                            <div className={style.subTitle}>
                                <div>ABOUT US</div>
                            </div>
                        </div>  
                        <div className={style.aboutTitle} data-aos="fade-up">
                            WHO WE ARE
                        </div>
                        
                        {/* Parameters (Accordion Section) */}
                        <div className={style.parameters}>
                            {/* OUR VISION */}
                            <div className={style.subParameters}>
                                <div className={style.aboutParameters}>
                                    <div className={style.subAboutParameters} onClick={() => {
                                        sliderToggle !== 1 ? setSliderToggle(1) : setSliderToggle(0)
                                    }}>
                                        <div className={style.subAboutParametersIcon}>
                                            <PiLightbulbLight size={32}/>
                                        </div>
                                        <div className={style.subAboutParametersHeading}>
                                            OUR VISION
                                        </div>
                                        <div className={style.subAboutParametersBtnIcon}>
                                            <RiArrowDropDownLine size={32}/>
                                        </div>        
                                    </div>
                                    <div className={sliderToggle === 1 ? `${style.aboutParametersPARA} ${style.aboutParametersPARAActive}` : `${style.aboutParametersPARA}`}>
                                        At KNM Studio, our vision is to become the leading visual consultancy in India, setting the standard 
                                        for excellence in the industry. We are dedicated to offering top-tier visual production services, 
                                        delivering comprehensive solutions tailored to our clients' varied needs.
                                    </div>  
                                </div>
                            </div>

                            {/* OUR GOALS */}
                            <div className={style.subParameters}>
                                <div className={style.aboutParameters}>
                                    <div className={style.subAboutParameters} onClick={() => 
                                        sliderToggle !== 2 ? setSliderToggle(2) : setSliderToggle(0)}>
                                        <div className={style.subAboutParametersIcon}>
                                            <SlLayers size={32}/>
                                        </div>
                                        <div className={style.subAboutParametersHeading}>
                                            OUR GOALS
                                        </div>
                                        <div className={style.subAboutParametersBtnIcon}>
                                            <RiArrowDropDownLine size={32}/>
                                        </div>  
                                    </div>
                                    <div className={sliderToggle === 2 ? `${style.aboutParametersPARA} ${style.aboutParametersPARAActive}` : `${style.aboutParametersPARA}`}>
                                        At KNM Studio, our mission is to empower businesses worldwide through the transformative power 
                                        of visual storytelling. We strive to create captivating narratives, produce compelling content, and 
                                        explore innovative possibilities.
                                    </div>  
                                </div>
                            </div>

                            {/* ABOUT US (Third section) */}
                            <div className={style.subParameters}>
                                <div className={style.aboutParameters}>
                                    <div className={style.subAboutParameters} onClick={() => 
                                        sliderToggle !== 3 ? setSliderToggle(3) : setSliderToggle(0)}>
                                        <div className={style.subAboutParametersIcon}>
                                            <TbBinaryTree size={32}/>
                                        </div>
                                        <div className={style.subAboutParametersHeading}>
                                            ABOUT US
                                        </div>
                                        <div className={style.subAboutParametersBtnIconAdv}>
                                            <RiArrowDropDownLine size={32}/>
                                        </div>  
                                    </div>
                                    <div className={sliderToggle === 3 ? `${style.aboutParametersPARA} ${style.aboutParametersPARAActive}` : `${style.aboutParametersPARA}`}>
                                        Empowering businesses through captivating ads, commercial video production, corporate videos, 
                                        event coverage, digital marketing, and e-commerce solutions.
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.subContainer} data-aos="fade-up">
                        <div className={style.subContainerHead}>
                            HELLO WE, KNM GROUP
                        </div>
                        <div className={style.subContainerPara}>
                            Founded in 2020, KNM Studio is a top video production company in Pune. Embrace digital connectivity and elevate your business with our cutting-edge tools and techniques for a competitive edge and remarkable success.
                        </div>    
                        <div className={style.subContainerTag}>
                            Sparsh Agrawal <br/>
                        </div>  
                        <div className={style.subContainerTagRole} >Founder</div>
                        
                        {/* Dynamic Experience Counter */}
                        <div className={style.subContainerExp}>
                            <div className={style.subContainerExpNum}>
                                {counterOn && (
                                    <Countup start={0} end={totalMonths} duration={2} /> 
                                )}
                            </div>
                            <div className={style.subContainerExpText}>
                                MONTHS OF <br />
                                DIGITAL EXPERIENCE
                            </div>
                        </div>
                    </div>              
                </div>
            </SrcollTrigger>     
        </>
    );
}

export default HomeAbout;