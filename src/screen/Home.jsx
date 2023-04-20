import React from "react";

import Header from "../components/HeaderBar";
import FriendList from "../components/FriendList";
import Menu from "../components/Menu";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <PostList />
      <FriendList />
    </>
  );
};

export default Home;
