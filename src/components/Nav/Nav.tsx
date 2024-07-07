import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
