import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./style.css";

function Nav() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>CIRCLE</h1>
      <nav className={styles.linkwrapper}>
        <NavLink
          className={styles.link}
          activeClassName={`${styles.link} ${styles.active}`}
          exact
          to="/photos"
        >
          P H O T O S
        </NavLink>
        <NavLink
          className={styles.link}
          // activeStyle={{
          //   fontWeight: "lighter",
          // }}
          activeClassName={`${styles.link} ${styles.active}`}
          exact
          to="/"
        >
          A B O U T
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
