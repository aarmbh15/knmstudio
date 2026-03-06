import React from "react";
import styles from "./HomeVideoSlider.module.css";
import heroVideo from "../../../../video/KNM_Portfolio_1080P[Mute].mp4";

const HomeHeroVideo = () => {

  return (
    <section className={styles.heroSliderSection}>

      <div className={styles.slideWrapper}>

        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className={styles.videoOverlay}></div>

      </div>

    </section>
  );
};

export default HomeHeroVideo;