import React from "react";

import style from "./App.module.css";

import user from "../../db/user.json";
import Profile from "../Profile/Profile";

import stats from "../../db/statistical-data.json";
import Statistics from "../Statistics/Statistics";

import friends from "../../db/friends.json";
import FriendList from "../FriendList/FriendList";

import transactions from "../../db/transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div className={style.profile}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={stats} />
      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
