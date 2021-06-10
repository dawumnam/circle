import React from "react";
import Photo from "./Photo/Photo";
import styles from "./style.css";

export default function Photos({ Listings }) {
  return (
    <div className={styles.wrapper}>
      {Listings.map((Listing) => {
        return <Photo Listing={Listing} key={Listing.id} />;
      })}
    </div>
  );
}
