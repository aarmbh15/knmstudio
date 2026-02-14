import React, { useEffect, useState } from "react";
import style from "./OurWork.module.css";
import OurWorkCard from './OurWorkCard/OurWorkCard';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Video Imports
import One8 from '../../../video/One8.mp4';
import VIPChai from '../../../video/Payment At Tapri_VIPS Wallet.mp4';
import Actimax from '../../../video/ACTIMAX - BRAND MASTER.mp4';
import DevFest from '../../../video/Devfest 2022 with KNM studio.mp4';
import LipBalm from '../../../video/Lip Balm Female.mp4';
import MCEA from '../../../video/MCEA Event Teaser.mp4';

// Thumbnail Imports
import ABM from '../../../img/OurWorkThumnail/ABM.png';
// ... (Keep all your other thumbnail imports here)

const OurWork = () => {
    const [displayType, setDisplayType] = useState("ALL");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "linear",
        arrows: false
    };

    const VideoData = [
        { key: 1, src: One8, title: "ONE 8 - ATTITUDE", subTitle: "⦿ Advertisement", discription: "Embracing the bold attitude that comes after wearing the undergarments of One8." },
        { key: 2, src: MCEA, title: "MCA Award Night", subTitle: "⦿ Event Documentation", discription: "In recognition of their untapped potential, MCA decided to honor the ground and office staff." },
        { key: 3, src: VIPChai, title: "VIPS Wallet", subTitle: "⦿ TVC - Advertisement", discription: "Vips wallet provides a seamless platform for UPI transactions." },
        { key: 4, src: Actimax, title: "ACTIMAX", subTitle: "⦿ E - Commerce", discription: "Actimax combines comfort and style, making it unstoppable in performance." },
        { key: 5, src: LipBalm, title: "AEGTE - LIP", subTitle: "⦿ Advertisement", discription: "Aegte's organic beetroot lip and cheek tint balm." },
        { key: 6, src: DevFest, title: "GDG - DEV FEST", subTitle: "⦿ Event", discription: "Meet developers and technologists from various industries." }
    ];

    const OurWorkDATAOne = [
        { src: ABM, Vtype: "ECommerce", title: "Vivo X300" },
        { src: ABM, Vtype: "ECommerce", title: "Vivo V60" },
        { src: ABM, Vtype: "ECommerce", title: "OPmobilty" },
        { src: ABM, Vtype: "ECommerce", title: "ARaymond" },
        { src: ABM, Vtype: "ECommerce", title: "Padcare" },
        { src: ABM, Vtype: "ECommerce", title: "Godrej Grenns" },
        { src: ABM, Vtype: "ECommerce", title: "Godrej Quality wheel" },
        { src: ABM, Vtype: "ECommerce", title: "Dryfruits" },
        { src: ABM, Vtype: "ECommerce", title: "Kensha" },
        { src: ABM, Vtype: "ECommerce", title: "Godrej Typography" }
    ];

    return (
        <div className={style.mainContainer}>
            {/* Integrated Video Slider Header */}
            <div className={style.heroSliderSection}>
                <Slider {...sliderSettings}>
                    {VideoData.map((video) => (
                        <div key={video.key} className={style.slideWrapper}>
                            <video src={video.src} autoPlay muted loop className={style.bgVideo} />
                            <div className={style.videoOverlay}>
                                <div className={style.headerTextContent} data-aos="fade-up">
                                    <span className={style.workTag}>OUR WORK</span>
                                    <h1 className={style.mainVideoTitle}>{video.title}</h1>
                                    <p className={style.videoSub}>{video.subTitle}</p>
                                    <p className={style.videoDesc}>{video.discription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Gallery Section */}
            <div className={style.subContaierSecond} data-aos="fade-up">
                <div className={style.subTitle}>SOME OF OUR BEST WORKS</div>
                
                <div className={style.subHead}>
                    {["Advertisement", "Events", "Corporate_Videos", "Informative Videos", "ECommerce"].map((type) => (
                        <div 
                            key={type}
                            className={displayType === type ? style.subHeadActionACTIVE : style.subHeadAction}
                            onClick={() => setDisplayType(displayType === type ? "ALL" : type)}
                        >
                            {type.replace('_', ' ')}
                        </div>
                    ))}
                </div>

                <div className={style.Dis}>
                    {OurWorkDATAOne.map((el, index) => (
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
    );
};

export default OurWork;