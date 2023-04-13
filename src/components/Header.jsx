import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}></div>
      <div className={styles.Center}>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "#999" }}
          />
          <input
            className={styles.SearchBar}
            type="text"
            placeholder="Rechercher"
          ></input>
        </div>
        <FontAwesomeIcon
          className={styles.Xmark}
          icon={faXmark}
          size="lg"
          style={{ color: "#000000" }}
        />
      </div>
      <div className={styles.Right}></div>
    </div>
  );
};

export default Header;
