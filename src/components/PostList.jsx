import React from "react";
import styles from "./PostList.module.css";
import Post from "./Post";
import profile from "../assets/img/profile.jpeg";

const PostList = () => {
  return (
    <div className={styles.PostContainer}>
      <div className={styles.NewPostContainer}>
        <div className={styles.Top}>
          <div className={styles.Profile}>
            <div className={styles.ImgContainer}>
              <img className={styles.Img} src={profile} />
            </div>
            <div className={styles.PostData}>
              <p className={styles.Publisher}>Profile Name</p>
            </div>
          </div>
        </div>
        <div className={styles.Content}>
          <textarea
            className={styles.SearchBar}
            type="text"
            placeholder="Nouvelle publication"
          ></textarea>
        </div>
        <div className={styles.Bottom}>
          <button className={styles.Publish}>Publier</button>
        </div>
      </div>
      <Post></Post>
    </div>
  );
};

export default PostList;
