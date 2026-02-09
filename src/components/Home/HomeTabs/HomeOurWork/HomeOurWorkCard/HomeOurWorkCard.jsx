import style from './HomeOurWorkCard.module.css';

const HomeOurWorkCard =(props) =>{
    return(
        <> 
                <div className={style.ourWorkSliders}>
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={`${props.src}`} alt={props.key} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>{props.type}</h4>
                                   <h1 className={style.Wtitle}>{props.title}</h1>
                            </div> 
                         </div>
                </div>    
        </>
    );
}
export default HomeOurWorkCard;