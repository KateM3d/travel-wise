import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="TravelWise logo" className={styles.logo} />
        <p className={styles.logoText}>TravelWise</p>
      </div>
    </Link>
  );
};

export default Logo;
