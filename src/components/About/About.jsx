import React from "react";
import styles from "./style.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="https://i.imgur.com/XC5Y8X2.png"
        alt=""
      />
      <h2 className={styles.title}>I am a cat of many hobbies</h2>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi
        nesciunt tempora molestiae voluptate dicta nihil labore, similique
        aliquid facere, qui odit! Molestias vitae laboriosam explicabo quia!
        Sit, aperiam minus. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Excepturi unde sed vero vel, non nam.
      </p>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laborum
        minima repellendus, quis maxime explicabo autem sed quas illo quisquam
        excepturi. Repellendus vel illum sit nemo veritatis ut. Tenetur,
        suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquid magni libero tempore facilis dolore. Temporibus?
      </p>
    </div>
  );
}

export default About;
