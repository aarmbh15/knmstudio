import style from './BlogPageCard.module.css';
import KnmButton from "../../../KnmButton/KnmButton";

const BlogPageCard =(props) =>{
    return(
        <>    
            <div className={style.container}>
          
                <div className={style.imgDIVContainer}>
                    <span className={style.imgDIV}>
                         {props.src}
                    </span>
                </div>
                <div className={style.sub}>
                     <div className={style.tag}>{props.tag}</div>
                     <div className={style.title}>{props.title}</div>
                     <div className={style.para}>{props.para}</div>
                     <div className={style.readBtn}>
                            <KnmButton text="Read More." />

                     </div>
                </div> 
                   
            </div>
        </>
    );
}
export default BlogPageCard;