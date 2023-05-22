import React from "react";
import styles from "./UserInfo.module.css";
const UserInfo = () => {
  return (
    <div className={styles.Container}>
      <h3>A propos</h3>
      <div className={styles.PersonnalInfo}>
        <h4>Bio</h4>
        <p className={styles.CenterTxt}>Aujourd'hui, je me sens bien</p>
      </div>
      <div className={styles.PersonnalInfo}>
        <h4>Informations</h4>
        <p className={styles.CenterTxt}>
          📷 jc_cno
          <br />
          👻 jc_cno
        </p>
      </div>
      <div className={styles.PersonnalInfo}>
        <h4>Centre d'intéret</h4>
        <p className={styles.CenterTxt}>
          🏍 Moto
          <br />
          🥊 Boxe
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
