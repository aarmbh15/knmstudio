import style from "./OurWorkCard.module.css";

const OurWorkCard = (props) => {

  if (props.displayType !== "ALL" && props.displayType !== props.Vtype) {
    return null;
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.cardImg}
          src={props.src}
          alt={props.title}
        />

        <div className={style.cardText}>
          <h2 className={style.Vtype}>{props.Vtype}</h2>
          <h1 className={style.title}>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default OurWorkCard;