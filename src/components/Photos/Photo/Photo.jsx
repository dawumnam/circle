import React from "react";
import styles from "./style.css";

function Photo({ Listing }) {
  const [isVisible, setVisible] = React.useState(false);

  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        !isVisible && entry.isIntersecting && setVisible(entry.isIntersecting);
        // setVisible(entry.isIntersecting);
        // entry.isIntersecting && setIsSeen(true);
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`${styles.listingWrapper} ${styles.fadeInSection} ${
        isVisible && styles.isVisible
      }`}
    >
      <img className={styles.image} src={Listing.url} />
      <p className={styles.title}>{Listing.title.toUpperCase()}</p>
      <p className={styles.dateCategory}>
        {`${Listing.date
          .toDateString()
          .toUpperCase()} IN ${Listing.category.toUpperCase()}`}
      </p>
      <p className={styles.summary}>{Listing.summary}</p>
      <div className={styles.readmore}>READ MORE</div>
    </div>
  );
}

export default Photo;
