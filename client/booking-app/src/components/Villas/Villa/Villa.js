import React from "react";
import { Link } from "react-router-dom";
import styles from "./Villa.module.css";

const Villa = ({ villaData }) => {
  console.log(villaData.description);
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
      <img src={villaData.image.url} alt={villaData.image.alt} />
    </div>
  );
};

export default Villa;
