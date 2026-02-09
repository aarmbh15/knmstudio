import style from './HomeTestimonialCard.module.css';


const HomeTestimonialCard = (props) =>{
    return(
        <>  
            <div className={style.container}>
                <div className={style.text}>
                    <p>{props.text}</p>          

                </div>
                <div className={style.line}></div>
                <div className={style.user}>
                     <div className={style.userName}>
                        <h3>{props.userName}</h3>
                     </div>
                     <div className={style.userRole}>
                        <h4>{props.userRole}</h4>
                     </div>
                </div>
            </div>
        </>
    );
}
export default HomeTestimonialCard ;