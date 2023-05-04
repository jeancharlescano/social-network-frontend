import React from "react";
import styles from "./PersonnalPage.module.css";
import HeaderBar from "../components/HeaderBar";

import Banner from "../assets/img/banniere.jpg";
import Profile from "../assets/img/profile.jpeg";
const PersonnalPage = () => {
  return (
    <>
      <HeaderBar />
      <div className={styles.ProfileDataContainer}>
        <div className={styles.Data}>
          <img className={styles.Banner} src={Banner} alt="banner" />
          <div className={styles.UserData}>
            <img
              className={styles.UserImage}
              src={Profile}
              alt="profile"
            />
            <div className={styles.TextDataContainer}>
              <h1>Profile Name</h1>
              <p className={styles.FriendCounter}>XXX Amis</p>
            </div>
          </div>
          <nav className={styles.NavContainer}>
            <ul className={styles.Nav}>
              <li>Publications</li>
              <li>Amis</li>
              <li>Photos</li>
              <li>A propos</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default PersonnalPage;
