import style from './ContactUs.module.css';

import ContactForm from './ContactForm/ContactForm';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () =>{
    return (
        <>
            <div className={style.container}>
            <div className={style.subContaierOne} >
                <div className={style.title} data-aos="fade-down">
                <div className={style.overlay}></div>
                    <div>OPEN YOUR EYES, SEE THE WORLD IN MOTION,<br /> <span className={style.titleHead} >EVERYTHING AROUND YOU IS CHANGING.</span> </div>
                    
                </div>
                <div className={style.para}data-aos="fade-down" >
                Imagine if the moment has come for you to change. <br /> Starting a collaboration is easy! Order a free consultation or call back. <br /> We are always in touch and delighted to cooperate with you.
                </div>
                <div className={style.callForAction}></div>
                </div>
                <div className={style.contactForm}>
                <div className={style.contactFormOne}> 
                    <div className={style.contactFormOneHead}> 
                    IF YOU HAVE QUESTIONS PLEASE <br /> <span className={style.contactFormOneHeadSub}> CONTACT US</span>
                    </div>
                    <div className={style.contactFormOneSubHead}> 
                    Fill fields and find approximate your repair
                    </div>
                    <div className={style.contactFormOneForm}> 
                            <ContactForm />
                    </div>
                        
                    </div>
                    <div className={style.contactFormSecond}> 
                     <div className={style.contactInfo}>
                        <div className={style.contactHead}><FaLocationDot /> &nbsp;&nbsp; HEAD OFFICE:</div>
                        <div className={style.contactSubHead}>101, Atheshri Apartment,<br/>Pan card club road <br />Baner, Pune, India, 411045</div>
                        <div className={style.contactHead}><FaPhoneVolume /> &nbsp;&nbsp;PHONES:</div>
                        <div className={style.contactSubHead}>+91 97666 59668</div>
                        <div className={style.contactHead}><MdEmail /> &nbsp;&nbsp;WRITE US:</div>
                        <div className={style.contactSubHead}>business@knmstudio.in</div>
                     </div>
                    </div>
                </div>


                <div className={style.contactMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.405600446975!2d73.78045657423847!3d18.555744082544674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1c320235db%3A0x50ab6b64bffacdf4!2sKNM%20Studio!5e0!3m2!1sen!2sin!4v1710425177496!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
        </>
    );
}
export default ContactUs;