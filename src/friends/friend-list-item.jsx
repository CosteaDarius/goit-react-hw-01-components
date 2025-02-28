import React from "react";
import PropTypes from "prop-types";
import "./friendList.css"; // Import stilurile

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
