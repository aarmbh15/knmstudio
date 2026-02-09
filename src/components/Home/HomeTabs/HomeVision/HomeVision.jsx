import {useState} from 'react';
import style from './HomeVision.module.css';
import { FaCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

import Countup from 'react-countup';
import SrcollTrigger from 'react-scroll-trigger';
import KnmButton from '../../../KnmButton/KnmButton';

const HomeVision =() =>{
const [counterOn , setCounterOn] =useState(false);
    return(
        <>  
       
            <div className={style.container}>
              <div className={style.textContainer}>
                  <div className={style.textContainerOne}>  

            <div className={style.sub}>
              <h3><FaCircle /></h3>
            <div className={style.subTitle}>
                    <div> OUR PROCESS</div>
                </div>
                </div>  
                <h3 className={style.divTitle}>HOW OUR </h3>
                <div className={style.title}>
                <h1> WORK FLOWS</h1>
                </div>
                </div>
                <div className={style.textContainerTwo}>  
                <Link to="/services">
                         <KnmButton text="EXPLORE MORE" />
                      </Link>
                </div>
                </div>
                <SrcollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                <div className={style.subContainer}>
              
                    <div className={style.subContainerDIV}>
                        <div className={style.percentage}>
                            {counterOn &&
                                <Countup start={0} end={15} duration={2} /> 
                            }            
                            %</div>
                        <div className={style.Vititle}>CONSULT</div>
                        <div className={style.VisubTitle}>We start by diving deep into your brand, audience, and goals. Our experts research and consult to capture your essence and message.</div>
                    </div>
                    <div className={style.subContainerDIV}>
                        <div className={style.percentage}>
                            {counterOn &&
                                <Countup start={0} end={50} duration={2} /> 
                             }
                            %</div>
                        <div className={style.Vititle}>CREATE</div>
                        <div className={style.VisubTitle}>After gathering insights, our creative team crafts brand-aligned concepts. Your input shapes the final concept, leading to exceptional storytelling through professional filming.</div>
                    </div>
                    <div className={style.subContainerDIV}>
                        <div className={style.percentage}>
                             {counterOn &&
                                <Countup start={0} end={35} duration={2} /> 
                             }
                            %</div>
                        <div className={style.Vititle}>CONCEIVE</div>
                        <div className={style.VisubTitle}>After filming, our skilled post-production team enhances raw footage with technology, crafting a captivating, brand-aligned masterpiece for your audience.</div>
                    </div>
                </div>
                </SrcollTrigger>   
                <div className={style.visionContainer}>
                    <div className={style.visionContainerHead}>If you think visual representation is not important for <br /> your business <br /> Let us change this mindset of yours.</div>
                    <p className={style.visionContainerPara}><b>"Dikhega nahi toh Bikega nahi"</b> Visuals play a vital role in today's digital age, as they capture attention, convey messages effectively, and foster stronger brand connections. Did you know that content with relevant images gets 94% more views than text-only content? Incorporating visually engaging content in marketing materials, website design, and social media campaigns can significantly impact audience engagement and overall business growth. By demonstrating the power of visuals through success stories, compelling comparisons, and statistical evidence, we aim to transform your perspective. Embracing the significance of visual representation will enable your business to stand out, leave a lasting impression, and drive success in the competitive market landscape."<br/><br/>
                    Choose us as your media agency and let us help you elevate your brand to</p>
                    <div className="style btnLink">
                      <Link to="/contact-us">
                         <KnmButton text="CONTACT US" />
                      </Link>
                    </div>

                </div>
            </div>
       
        </>
    );
}
export default HomeVision;