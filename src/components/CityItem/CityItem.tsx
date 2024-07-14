import { City } from "../../types";
import styles from "./CityItem.module.css";
interface CityItemProps {
  city: City;
}

const CityItem: React.FC<CityItemProps> = ({ city }) => {
  const { cityName, emoji, date } = city;

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};

export default CityItem;
