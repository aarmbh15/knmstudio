import React from "react";
import styles from "./HomeVideoSlider.module.css";
import heroVideo from "../../../../video/KNM_Portfolio_1080P[Mute].mp4";

const HomeHeroVideo = () => {
  return (
    <section className={styles.hero} id="hero">
      {/* <div className={styles.overlay}></div> */}

      <div className={styles.container}>
        <div className={styles.slider}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.video}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroVideo;
