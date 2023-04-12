import "./TwFollowCard.css";
import { useState } from "react";

export const TwFollowCard = ({ formatUserName, userat, username, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          src={`https://unavatar.io/${userat}`}
          alt="User avatar"
          className="tw-follow-card-avatar"
        />
        <div className="tw-follow-card-info">
          <strong>{username}</strong>
          <span className="tw-follow-card-info-username">{formatUserName(userat)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-follow-card-text">{isFollowing ? "Following" : "Follow"}</span>
          <span className="tw-follow-card-unfollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};
