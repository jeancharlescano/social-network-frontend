import React from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={styles.MenuContainer}>
      <div className={styles.Menu}>
        <div className={styles.Items}>
          <FontAwesomeIcon icon={faUser} size="2xl" style={{ color: "black" }} />
          <p className={styles.Text}>Profile Name</p>
        </div>
        <div className={styles.Items}>
          <FontAwesomeIcon icon={faUserGroup} size="2xl" style={{ color: "black" }} />
          <p className={styles.Text}>Amis</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
