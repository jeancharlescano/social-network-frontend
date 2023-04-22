import React from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={styles.MenuContainer}>
      <div className={styles.Menu}>
        <div className={styles.Items}>
          <div className={styles.IconContainer}>
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              style={{ color: "black" }}
            />
          </div>
          <div className={styles.TextContainer}>
            <p className={styles.Text}>Profile Name</p>
          </div>
        </div>
        <div className={styles.Items}>
          <div className={styles.IconContainer}>
            <FontAwesomeIcon
              icon={faUserGroup}
              size="xl"
              style={{ color: "black" }}
            />
          </div>
          <div className={styles.TextContainer}>
            <p className={styles.Text}>Amis</p>
          </div>
        </div>
        <div className={styles.Items}>
          <div className={styles.IconContainer}>
            <FontAwesomeIcon
              icon={faMessage}
              size="xl"
              style={{ color: "black" }}
            />
          </div>
          <div className={styles.TextContainer}>
            <p className={styles.Text}>Messages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
