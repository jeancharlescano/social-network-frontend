import React from "react";
import styles from "./Profile.module.css";
import profile from "../assets/img/profile.jpeg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/profile");
      }}
      className={styles.Container}
    >
      <img className={styles.Img} src={profile} />
    </div>
  );
};

export default Profile;
