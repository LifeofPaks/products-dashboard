import React from "react";
import "../TopBox/TopBox.scss";
import { topDealUsers } from "../../Data/Data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="userProfile" key={user.id}>
            <div className="left">
              <img src={user.image} alt="user-image" />
              <div className="userInfo">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>

            <span className="amount">{`$${user.amount}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
