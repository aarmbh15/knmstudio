import React from "react";
import style from "./HomeVideoSliderOps.module.css";

const HomeVideoSliderOps = (props) => {

  return (

    <div className={style.slidercontainer}>

      <video
        className={style.sliderVideo}
        src={props.source}
        autoPlay
        muted
        loop
        playsInline
      />

    </div>

  );

};

export default HomeVideoSliderOps;