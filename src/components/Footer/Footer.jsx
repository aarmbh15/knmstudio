import style from "./Footer.module.css";


const FOOTER = () =>{
    return (
        <>
            <footer className={style.footerCon} >
                <div className={style.container}>
                    <div className={style.callForAction}>
                         LET'S BUILD SOMETHING <br/> AMAZING TOGETHER
                    </div>
                    <div className={style.subContainer}>

                    <div className={style.contact}>
                    <h3 className={style.footerHeading}>Contact</h3>
                         <span className={style.footerHeadingSub}>T : +91 84596 39610</span><br />
                         <span className={style.footerHeadingSub}>E : business@knmstudio.in</span> 
      
                    </div>
                    <div className={style.address}>
                        <h3 className={style.footerHeading}>Head Office </h3>
                   <span className={style.footerHeadingSub}> 101, Atheshri Apartment,<br />Baner, Pune, India <br />411045</span>
                    </div>
                    </div>
                </div>
                <div className={style.line} />
                <div className={style.copyRight} >
                         KNM Studio © 2024 Designed by Siddhant Gupta
                </div>
                
            </footer>
        </>
    );
}
export default FOOTER;