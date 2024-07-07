import React from "react";
import styles from "./User.module.css";

interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const FAKE_USER: User = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const User: React.FC = () => {
  const user = FAKE_USER;

  const handleClick = (): void => {
    // Handle logout logic here
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
