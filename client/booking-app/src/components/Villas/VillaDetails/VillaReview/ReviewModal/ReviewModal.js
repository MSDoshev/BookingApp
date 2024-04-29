import { useState } from "react";
import styles from "./ReviewModal.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewModal({
  visible,
  onClose,
  onSubmit,
  reviewData,
  setReviewData,
  villaId,
}) {
  const [hover, setHover] = useState(null);

  const handleRatingChange = (value) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      rating: value,
      villa: villaId,
    }));
  };

  const handleTextChange = (e) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      reviewText: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(reviewData);
  };
  return (
    <div className={`${styles.modal} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Leave a Review</h2>
        <div>
          <form>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index} className={styles.rating}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => handleRatingChange(currentRating)}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={styles.star}
                    color={
                      currentRating <= (hover || reviewData.rating)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}

            <label></label>
            <textarea
              type="text"
              placeholder="Type something here..."
              onChange={handleTextChange}
              value={reviewData.reviewText}
            ></textarea>
          </form>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
