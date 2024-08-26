import React from "react";
import { City } from "../../types";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import styles from "./CityList.module.css";

interface CityListProps {
  cities: City[];
  isLoading: boolean;
}

const CityList: React.FC<CityListProps> = ({ cities, isLoading }) => {
  if (!cities.length) return <Message message="Please add your first city" />;
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
