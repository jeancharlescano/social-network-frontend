import React from "react";
import styles from "./FriendsCard.module.css";

const FriendsCard = () => {
  return (
    <div onClick={() => console.log("toto")} className={styles.Container}>
      <p>toto</p>
    </div>
  );
};

export default FriendsCard;
