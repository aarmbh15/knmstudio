import style from './OurWorkCard.module.css';

const OurWorkCard = (props) =>{

    return (
        <>
                {

                props.displayType === "ALL"?
                <div className={style.container}>
                    <div className={style.card}>
                        <img className={style.cardImg} src={props.src} width={400} />
                       <div className={style.cardText}> 
                            <h2 className={style.Vtype} >{props.Vtype}</h2>
                            <h1 className={style.title}>{props.title}</h1>
                       </div> 
                    </div>
                </div>:
                props.displayType === props.Vtype ?
                <div className={style.container}>
                <div className={style.card}>
                    <img className={style.cardImg} src={props.src} width={400} />
                   <div className={style.cardText}> 
                        <h2 className={style.Vtype} >{props.Vtype}</h2>
                        <h1 className={style.title}>{props.title}</h1>
                   </div> 
                </div>
            </div> :null

}
        </>
    );
}
export default OurWorkCard;