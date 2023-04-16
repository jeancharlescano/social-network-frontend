import React from "react";
import styles from "./Profile.module.css";
import profile from "../assets/img/profile.jpeg";

const Profile = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Img}src={profile} />
    </div>
  );
};

export default Profile;
