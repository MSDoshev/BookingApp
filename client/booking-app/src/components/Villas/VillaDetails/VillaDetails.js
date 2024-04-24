import React, { useState } from "react";
import styles from "./VillaDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCar,
  faSwimmingPool,
  faMountain,
  faCoffee,
  faSnowflake,
  faTv,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export const VillaDetails = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? styles.starActive : styles.starInactive}
          onClick={() => handleRatingChange(i)}
        />
      );
    }
    return stars;
  };
  return (
    <>
      <div className={styles.title}>
        <h1>Villa №1</h1>
      </div>
      <div className={styles.villaContainer}>
        <div className={styles.picture}>
          <img
            src="https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65"
            alt="Villa"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.villaDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet ligula a sem pulvinar molestie. Aliquam erat volutpat.
            Curabitur faucibus accumsan odio sed semper. Fusce molestie eget
            nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed
            accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi
            condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin
            in aliquam lectus.
          </div>
          <form className={styles.optionsContainer}>
            <div>
              <label>Guests: </label>
              <select>
                <option value="1">1</option>

                <option value="2">2</option>

                <option value="3">3</option>

                <option value="4">4</option>

                <option value="5">5</option>

                <option value="6">6</option>
              </select>
            </div>
            <div>
              <label>From: </label>
              <input type="date"></input>
            </div>
            <div>
              <label>To: </label>
              <input type="date"></input>
            </div>
            <button type="submit">Book</button>
          </form>

          <div className={styles.extras}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faWifi} /> Free Wifi
              </li>
              <li>
                <FontAwesomeIcon icon={faCar} /> Free Parking
              </li>
              <li>
                <FontAwesomeIcon icon={faSwimmingPool} /> Pool
              </li>
              <li>
                <FontAwesomeIcon icon={faMountain} /> Beautiful View
              </li>
              <li>
                <FontAwesomeIcon icon={faCoffee} /> Breakfast Included
              </li>
              <li>
                <FontAwesomeIcon icon={faSnowflake} /> Air Conditioner
              </li>
              <li>
                <FontAwesomeIcon icon={faTv} /> Flat Screen TV
              </li>
            </ul>
          </div>
          <div className={styles.reviewsContainer}>
            <h2>Reviews</h2>
            <ul className={styles.scrollableList}>
              <li>
                <h3>User Full Name</h3>
                Rating: {renderStars()}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat
                  volutpat.
                </p>
              </li>
              <li>
                <h3>User Full Name</h3>
                Rating: {renderStars()}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat
                  volutpat.
                </p>
              </li>
              <li>
                <h3>User Full Name</h3>
                Rating: {renderStars()}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat
                  volutpat.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
