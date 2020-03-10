import React from "react";
import T from "prop-types";

import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => {
        const btnClass = friend.isOnline ? style.active : style.disabled;
        return (
          <li key={friend.id} className={style.item}>
            <span className={btnClass}></span>
            <img
              className={style.avatar}
              src={friend.avatar}
              alt={friend.name}
            />
            <p className={style.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired
    }).isRequired
  )
};

export default FriendList;
