import React from "react";
import styles from "./HeaderBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Profile from "./Profile.jsx";

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}></div>
      <div className={styles.Center}>
        <FontAwesomeIcon
          className={styles.SearchIcon}
          icon={faMagnifyingGlass}
          size="lg"
          style={{ color: "#999" }}
        />
        <input
          className={styles.SearchBar}
          type="text"
          placeholder="Rechercher"
        ></input>
        <FontAwesomeIcon
          className={styles.Xmark}
          icon={faXmark}
          size="lg"
          style={{ color: "#000000" }}
        />
      </div>
      <div className={styles.Right}>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
