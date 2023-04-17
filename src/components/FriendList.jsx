import React, { useRef, useState, useEffect } from "react";
import styles from "./FriendList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FriendList = () => {
  const [showInput, setShowInput] = useState(false);
  const searchFriend = useRef();

  const handleDisplaySearchField = () => {
    setShowInput(true);
  };

  function handleKeyDown(event) {
    if (event.code === "Enter") {
      console.log(searchFriend.current.value);
      setShowInput(false);
    }
  }

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
              id="searchField"
              type="text"
              placeholder="Rechercher..."
              ref={searchFriend}
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendList;
