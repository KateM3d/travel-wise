import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

const AppNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">ountries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
