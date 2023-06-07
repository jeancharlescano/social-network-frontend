import React from "react";
import styles from "./FriendsCard.module.css";
import profile from "../../assets/img/profile.jpeg";

const FriendsCard = () => {
  const commonFriend = "X";

  return (
    <div onClick={() => console.log("toto")} className={styles.Container}>
      <img className={styles.ProfilePic} src={profile} alt=""></img>
      <div className={styles.userInfo}>
        <p className={styles.fullname}>Prénom Nom</p>
        <p className={styles.commonFriend}>{commonFriend} amis en commun</p>
      </div>
    </div>
  );
};

export default FriendsCard;
