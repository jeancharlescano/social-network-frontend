import React from "react";
import styles from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

const PostList = () => {
  return (
    <div className={styles.PostContainer}>
      <NewPost/>
      <Post></Post>
    </div>
  );
};

export default PostList;
