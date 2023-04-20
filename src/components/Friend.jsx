import React from "react";
import styles from "./Friend.module.css";
const Friend = ({ name, img }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ImgContainer}>
        <img className={styles.Img} src={img} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Friend;
