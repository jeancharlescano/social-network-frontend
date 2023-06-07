import React, { useState } from "react";
import styles from "./PersonnalPage.module.css";
import HeaderBar from "../components/HeaderBar";

import Banner from "../assets/img/banniere.jpg";
import Profile from "../assets/img/profile.jpeg";

import PublicationsUser from "../components/personnalPage/PublicationsUser";
import FriendsUser from "../components/personnalPage/FriendsUser";
import AssetsUser from "../components/personnalPage/AssetsUser";
import AboutUser from "../components/personnalPage/AboutUser";

const PersonnalPage = () => {
  const [userInfo, setUserInfo] = useState(0);
  return (
    <>
      <HeaderBar />
      <div className={styles.ProfileDataContainer}>
        <div className={styles.Data}>
          <img className={styles.Banner} src={Banner} alt="banner" />
          <div className={styles.UserData}>
            <img className={styles.UserImage} src={Profile} alt="profile" />
            <div className={styles.TextDataContainer}>
              <h1>Profile Name</h1>
              <p className={styles.FriendCounter}>XXX Amis</p>
            </div>
          </div>
          <nav className={styles.NavContainer}>
            <ul className={styles.Nav}>
              <li
                onClick={() => {
                  setUserInfo(0);
                }}
              >
                Publications
              </li>
              <li
                onClick={() => {
                  setUserInfo(1);
                }}
              >
                Amis
              </li>
              <li
                onClick={() => {
                  setUserInfo(2);
                }}
              >
                Photos
              </li>
              <li
                onClick={() => {
                  setUserInfo(3);
                }}
              >
                À propos
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.ProfileContent}>
        <div className={styles.Topics}>
          {userInfo === 0 && <PublicationsUser />}
          {userInfo === 1 && <FriendsUser />}
          {userInfo === 2 && <AssetsUser />}
          {userInfo === 3 && <AboutUser />}
        </div>
      </div>
    </>
  );
};

export default PersonnalPage;
