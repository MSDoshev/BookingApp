import { useState } from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./VillaReview.module.css";

export default function VillaReview() {
  const [rating, setRating] = useState(0);

  const renderStars = () => {
    const stars = [];
    const handleRatingChange = (value) => {
      setRating(value);
    };

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
    <div className={styles.reviewsContainer}>
      <h2>Reviews</h2>
      <Link to={""} className={styles.reviewBtn}>
        Leave a Review
      </Link>
      <ul className={styles.scrollableList}>
        <li>
          <h3>User Full Name</h3>
          Rating: {renderStars()}
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet ligula a sem pulvinar molestie. Aliquam erat volutpat.
          </p>
        </li>
        <li>
          <h3>User Full Name</h3>
          Rating: {renderStars()}
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet ligula a sem pulvinar molestie. Aliquam erat volutpat.
          </p>
        </li>
        <li>
          <h3>User Full Name</h3>
          Rating: {renderStars()}
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet ligula a sem pulvinar molestie. Aliquam erat volutpat.
          </p>
        </li>
      </ul>
    </div>
  );
}
