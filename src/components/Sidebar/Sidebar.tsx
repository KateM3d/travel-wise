import { Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Nav />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Sidebar;
