// HomeVideoSlider.jsx     ← better rename to HomeHeroVideo.jsx later
import React from "react";
import styles from "./HomeVideoSlider.module.css";

// Import your video (Vite handles this → creates correct public URL)
import heroVideo from "../../../../video/KNM_Portfolio_1080P[Mute].mp4";

const HomeHeroVideo = () => {
  return (
    <div className={styles.hero}>
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay + content */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>KNM Studio</h1>
          <p>Creative Video Production • Motion Design • Storytelling</p>
          {/* Add CTA buttons, logo animation, etc. here */}
          <button className={styles.cta}>View Our Work</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroVideo;