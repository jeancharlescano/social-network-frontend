import React from "react";
import styles from "./PublicationUser.module.css";

import Post from "../Post";
import UserInfo from "./UserInfo";
import NewPost from "../NewPost";

const PublicationsUser = () => {
  return (
    <main className={styles.Container}>
      <section className={styles.LeftContainer}>
        <UserInfo />
      </section>
      <section className={styles.RightContainer}>
        <NewPost />
        <Post />
      </section>
    </main>
  );
};

export default PublicationsUser;
