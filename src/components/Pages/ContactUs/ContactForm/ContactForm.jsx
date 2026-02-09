import style from './ContactForm.module.css';

const ContactForm = () =>{
    return (
        <>
            <div className={style.container}>
                    <form action="https://formspree.io/f/mbjnenkl" method="POST" >
                        <input
                            className={style.inputField}
                            type="text"
                            name="Name"
                            placeholder="Name"
                            autoComplete="off"
                            required
                        />
                        <input
                            className={style.inputField}
                            type="email"
                            name="Email"
                            placeholder="Email Address"
                            autoComplete="off"
                            required
                        />
                          <br />
                          <input
                            className={style.inputField}
                            type="text"
                            name="Ph-number"
                            placeholder="Mobile Number"
                            autoComplete="off"
                            required
                        />
                        <input
                            className={style.inputField}
                            type="text"
                            name="CompanyName"
                            placeholder="Company Name"
                            autoComplete="off"
                            required
                        />
                            <br />
                       
                            <input
                            className={style.inputFieldD}
                            type="date"
                            name="Project Start Date"
                            placeholder="How soon can we start?"
                            autoComplete="off"
                            required
                        />

                       <select name="languages" id="lang">
                       <option value="" disabled selected hidden>Please Choose Service</option>
                         <option value="Brand Development">Brand Development</option>
                         <option value="Advertisement">Advertisement</option>
                         <option value="E-Commerce">E-Commerce</option>
                         <option value="Corporate Videos">Corporate Videos</option>
                         <option value="Events">Events</option>
                         <option value="Informative Videos">Informative Videos</option>
                       </select>
                        <br />
                         <textarea
                            className={style.inputField}
                            type="text"
                            name="message"
                            placeholder="Enter Your Message"
                            rows="10"
                            // cols="60"
                            autoComplete="off"
                            required
                        />
                        <br/>
                        <input className={style.actionBtn} type="submit" value="Send" />
                    </form>
                    
            </div>
            
        </>
    );
}
export default ContactForm;