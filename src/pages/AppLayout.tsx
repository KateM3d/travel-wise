import Map from "../components/Map/Map";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";

const AppLayout: React.FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
