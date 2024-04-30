import { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./VillaReview.module.css";
import ReviewModal from "./ReviewModal/ReviewModal";
import { addVillaReview, getReviewsData } from "../../../../store/user-actions";

export default function VillaReview({ isAuthenticated }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { id } = useParams();
  id -= 1;
  const [reviewData, setReviewData] = useState({
    villa: null,
    rating: null,
    reviewText: "",
  });
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setReviewData({
      villa: null,
      rating: null,
      reviewText: "",
    });
  };

  const handleReviewSubmit = async (reviewData) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (!reviewData.reviewText.trim()) {
      console.error("Review text cannot be empty");
      return;
    }
    try {
      await dispatch(addVillaReview(reviewData, id));
      const updatedReviewsData = await getReviewsData(id);
      setReviews(updatedReviewsData);
      setIsModalVisible(false);
      setReviewData({
        villa: null,
        rating: null,
        reviewText: "",
      });
    } catch (error) {
      console.error("Error submitting review:", error.message);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsData = await getReviewsData(id);
      if (reviewsData) {
        setReviews(reviewsData);
      } else {
        // Handle error
      }
    };

    fetchReviews();
  }, [id]);
  return (
    <div className={styles.reviewsContainer}>
      <h2>Reviews</h2>
      <button className={styles.reviewBtn} onClick={showModal}>
        Leave a Review
      </button>
      <ReviewModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onSubmit={handleReviewSubmit}
        setReviewData={setReviewData}
        reviewData={reviewData}
        villaId={id}
      />
      {Object.entries(reviews).length > 0 ? (
        <>
          <ul className={styles.scrollableList}>
            {reviews &&
              Object.entries(reviews).map(([key, review]) => (
                <li key={key} className={styles.reviewItem}>
                  <h3>{review.userName}</h3>
                  Rating:{" "}
                  {[...Array(review.rating)].map((star, index) => {
                    return (
                      <label key={index} className={styles.rating}>
                        <FontAwesomeIcon icon={faStar} color="#ffc107" />
                      </label>
                    );
                  })}
                  <p>{review.reviewText}</p>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <div className={styles.noReviewsText}>No Reviews Yet..</div>
      )}
    </div>
  );
}
