import { useEffect } from "react";
import style from './ServiceTestimonial.module.css';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeTestimonialCard from "../../../Home/HomeTabs/HomeTestimonial/HomeTestimonialCard/HomeTestimonialCard";

import { FaCircle } from "react-icons/fa";

const HomeTestimonial =() =>{

    useEffect(() =>{
        AOS.init({duration:1000});
    },[]);


    const TestimonialData = [
        {
            key:1,
            text:"I have been working with the digital marketing experts at KNM Studio for over a year now, and I am extremely impressed with the results. Their strategies have significantly boosted our online presence, and our sales have skyrocketed. The team is highly knowledgeable, responsive, and a pleasure to work with. I highly recommend KNM Studio to any business looking to elevate their online marketing efforts.",
            userName:"Prajakta Gupta",
            userRole:"Founder Cologne Spa"
        },
        {
            key:2,
            text:"KNM Studio's video production work is outstanding! Their creative team consistently delivers impactful videos that elevate our marketing efforts. Highly commendable!",
                            userName:"Siddharth Gupta",
                            userRole:"Marketing Head -  Spardha Learning"
        },
        {
            key:3,
            text:"   The content created by KNM Studio is exceptional! Their team consistently delivers captivating and high-quality content that engages our audience effectively. Highly recommended!",
            userName:"Umar Farukh",
            userRole:"Terminak Head Vivo"
        }


    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1250 ,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            
          ],
      };
    
    return(
        <>  
            <div className={style.container}>
                <div className={style.title}>
                <div> RELATIONSHIPS <b>BASED ON TRUST.</b></div>
                </div>
                
                <div className={style.subContainer}>
                <Slider {...settings}>
                {TestimonialData.map((el) =>(
                    <HomeTestimonialCard 
                    text={el.text}
                    userName={el.userName}
                    userRole={el.userRole}
               />
                ))}
                 </Slider>


                </div> 
               
            </div>
        </>
    );
}
export default HomeTestimonial;