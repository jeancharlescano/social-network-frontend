import React, { useRef, useState, useEffect } from "react";
import styles from "./FriendList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Users from "../mock/Users.json";

import Friend from "./Friend.jsx";

const FriendList = () => {
  const [showInput, setShowInput] = useState(false);
  const searchFriend = useRef();

  const handleDisplaySearchField = () => {
    setShowInput(true);
  };

  const handleBlur = () => {
    setShowInput(false);
  };

  function handleSearchFriend(event) {
    if (event.code === "Enter") {
      console.log(searchFriend.current.value);
      setShowInput(false);
    }
  }

  useEffect(() => {
    if (showInput) {
      searchFriend.current.focus();
    }
  }, [showInput]);

  return (
    <div className={styles.FriendListContainer}>
      <div className={styles.Title}>
        <h2>Liste d'amis</h2>
        {!showInput && (
          <FontAwesomeIcon
            className={styles.SearchIcon}
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "#3d3d3d" }}
            onClick={handleDisplaySearchField}
          />
        )}
        {showInput && (
          <div className={styles.SearchInputContainer}>
            <input
              onBlur={handleBlur}
              id="searchField"
              type="text"
              placeholder="Rechercher..."
              ref={searchFriend}
              onKeyDown={handleSearchFriend}
            />
          </div>
        )}
      </div>
      <div className={styles.List}>
        {Users.map((e, key) => (
          <Friend name={`${e.firstname} ${e.lastname}`} key={key} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
