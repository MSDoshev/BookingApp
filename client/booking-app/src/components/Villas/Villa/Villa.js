import React from "react";
import { Link } from "react-router-dom";
import styles from "../Villas.module.css";

const Villa = ({ villaData }) => {
  return (
    <div className={styles.villa}>
      <div className={styles.villaContent}>
        <h2>{villaData.title}</h2>
        <p>{villaData.description}</p>
        <div className={styles.vInfo}>
          <h3>Up to {villaData.capacity} people</h3>
          <h3>Price from &euro;{villaData.price}</h3>
          <Link to={`/villa/${villaData.id}`}>Book Now</Link>
        </div>
      </div>
      <img src={villaData.image} alt={villaData.title} />
    </div>
  );
};

export default Villa;
