
import style from './KnmButton.module.css';
import { FaAngleRight } from "react-icons/fa";

const KnmButton =(props) =>{
     return(
    <> 
        <div className={style.btnContainer}>
        <div className={style.btnContainerIcon}><FaAngleRight className={style.BtnIcon} />
        <div className={style.btnContainerText}>{props.text}</div></div>
        
        </div>
    </>
    );
}
export default KnmButton;