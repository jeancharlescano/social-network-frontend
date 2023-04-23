import React from "react";
import styles from "./Post.module.css";
import profile from "../assets/img/profile.jpeg";

const Post = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Post}>
        <div className={styles.Header}>
          <div className={styles.Profile}>
            <div className={styles.ImgContainer}>
              <img className={styles.Img} src={profile} />
            </div>
            <div className={styles.PostData}>
              <p className={styles.Publisher}>Profile Name</p>
              <p className={styles.Date}>12/04/2023 14h00</p>
            </div>
          </div>
        </div>
        <div className={styles.Content}>
          <p className={styles.Text}>
          </p>
        </div>
        <div className={styles.ShowMore}>qsdqsdqsd</div>
      </div>
    </div>
  );
};

export default Post;
