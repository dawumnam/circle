import React from "react";
import styles from "./style.css";
function Footer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>BORN AND RAISED IN THE U.S.</p>
      <div className={styles.iconwrapper}>
        <i className="fab fa-facebook-square fa-lg"></i>
        <i className="fab fa-twitter-square fa-lg"></i>
        <i className="fab fa-linkedin fa-lg"></i>
        <i className="fas fa-envelope-square fa-lg"></i>
      </div>
    </div>
  );
}

export default Footer;
