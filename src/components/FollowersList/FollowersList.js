import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    try {
      const { data, status } = await axios.get(
        "https://randomuser.me/api/?results=5"
      );
      setFollowers(data.results);
    } catch (error) {
      setError("Network Error");
    }
  };
  console.log(error);
  return (
    <div className="followerslist-container">
      {error && <h3>{error}</h3>}
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${index}`}
            key={index}
          >
            <img src={follower.picture.large} alt={follower.name.first} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
