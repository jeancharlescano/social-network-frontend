import React from "react";
import styles from "./PublicationUser.module.css";

import Post from "../Post";
import UserInfo from "./UserInfo";
import NewPost from "../NewPost";
const PublicationsUser = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftContainer}>
        <UserInfo />
      </div>
      <div className={styles.RightContainer}>
        <NewPost />
        <Post />
      </div>
    </div>
  );
};

export default PublicationsUser;
