import React from "react";
import user from "../data/user.json";
import data from "../data/data.json";
import Profile from "../profile/profile";
import Statistics from "../statistic/statistics";
import FriendList from "../friends/friendList";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import TransactionHistory from "../transaction/transaction-history";

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
