import React from "react";
import styles from "./FriendUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FriendsCard from "./FriendsCard";
import Footer from "../Footer";

const FriendsUser = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Header}>
          <h3>Amis </h3>
          <div className={styles.InputContainer}>
            <FontAwesomeIcon
              className={styles.SearchIcon}
              icon={faMagnifyingGlass}
              size="sm"
              style={{ color: "#999" }}
            />
            <input
              className={styles.SearchFriend}
              placeholder="Rechercher..."
            ></input>
          </div>
        </div>
        <div className={styles.FriendsGrid}>
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FriendsUser;
