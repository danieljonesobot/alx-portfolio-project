import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Unlock the full potential of your business and stand out in an ever
          evolving world.
        </h1>
        <p className={styles.description}>
          We help businesses establish a strong brand identity, credibility,
          boost online presence and growth through our comprehensive suite of
          innovative solutions and business tool-kit.
        </p>
        <a
          className={styles.contactBtn}
          href="https://calendly.com/daniel-jonesobot/30min"
          target="_blank"
        >
          Book a call
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/triangle.png")}
        alt="Triangle Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
