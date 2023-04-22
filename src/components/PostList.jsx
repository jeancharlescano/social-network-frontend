import React from "react";
import styles from "./PostList.module.css";
import Post from "./Post";
const PostList = () => {
  return (
    <div className={styles.PostContainer}>
      <Post></Post>
    </div>
  );
};

export default PostList;
