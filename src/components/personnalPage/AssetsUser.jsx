import React from "react";
import styles from "./AssetsUser.module.css";
import PictureUser from "./PictureUser";

const PicturesUser = () => {
  return (
    <section className={styles.Container}>
      <header className={styles.Header}>
        <h3>Photos</h3>
      </header>
      <article className={styles.Content}>
        <PictureUser />
        <PictureUser />
        <PictureUser />
        <PictureUser />
        <PictureUser />
        <PictureUser />
        <PictureUser />
      </article>
      <footer className={styles.SeeMore}>
        <button className={styles.Button}>Voir tout</button>
      </footer>
    </section>
  );
};

export default PicturesUser;
