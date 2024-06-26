import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCar,
  faSwimmingPool,
  faMountain,
  faCoffee,
  faSnowflake,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button";
import PageTransitionAnimation from "../../PageTransitionAnimation/PageTransitionAnimation";
import VillaCarousel from "../../UI/VillaCarousel/VillaCarousel";
import VillaReview from "./VillaReview/VillaReview";
import FeedbackModal from "../../UI/FeedbackModal/FeedbackModal";
import { fetchVillasData } from "../../../store/villa-actions";
import { addReservationForUser } from "../../../store/user-actions";
import { uiActions } from "../../../store/ui-slice";
import styles from "./VillaDetails.module.css";

export const VillaDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { id } = useParams();
  const villasData = useSelector((state) => state.ui.villasData);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const currentVilla = villasData.find((villa) => villa.id === parseInt(id));

  const [reservationData, setReservationData] = useState({
    villa: currentVilla,
    guests: 1,
    dateFrom: "",
    dateTo: "",
    price: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const { dateFrom, dateTo } = reservationData;

    if (new Date(dateTo) < new Date(dateFrom)) {
      setFeedbackMessage("End date cannot be before start date!");
      return;
    }

    dispatch(addReservationForUser(reservationData))
      .then(() => {
        dispatch(uiActions.toggleFeedbackModal());
        setFeedbackMessage("Your reservation is submitted successfully!");
      })
      .catch((error) => {
        dispatch(uiActions.toggleFeedbackModal());
        setFeedbackMessage(`Error: ${error.message}`);
      });
    setReservationData({
      villa: currentVilla,
      guests: 1,
      dateFrom: "",
      dateTo: "",
      price: 0,
    });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "dateFrom" || name === "dateTo") {
      const totalPrice = calculatePrice({ ...reservationData, [name]: value });
      setReservationData((prevData) => ({
        ...prevData,
        price: totalPrice,
      }));
    }
  };
  const calculatePrice = (reservationData) => {
    const { dateFrom, dateTo } = reservationData;

    if (!dateFrom || !dateTo) {
      return 0;
    }

    const pricePerNight = currentVilla.price;
    const startDate = new Date(dateFrom);
    const endDate = new Date(dateTo);

    if (isNaN(startDate) || isNaN(endDate) || startDate > endDate) {
      return 0;
    }

    const numberOfNights = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const totalPrice = pricePerNight * numberOfNights;
    return totalPrice;
  };

  useEffect(() => {
    dispatch(fetchVillasData());
  }, [dispatch]);

  return (
    <PageTransitionAnimation>
      {feedbackMessage && (
        <FeedbackModal
          visible={true}
          onClose={() => setFeedbackMessage("")}
          message={feedbackMessage}
        />
      )}
      {currentVilla ? (
        <>
          <div className={styles.title}>
            <div className={styles.title}>
              <h1>{currentVilla.title}</h1>
            </div>
          </div>
          <div className={styles.villaContainer}>
            <div className={styles.picture}>
              <VillaCarousel images={currentVilla.carouselImages} />
            </div>
            <div className={styles.info}>
              <div className={styles.villaDescription}>
                {currentVilla.description}
              </div>
              <form className={styles.optionsContainer} onSubmit={handleSubmit}>
                <div>
                  <label>Guests: </label>
                  <select
                    name="guests"
                    value={reservationData.guests}
                    onChange={handleInputChange}
                  >
                    {currentVilla &&
                      [...Array(currentVilla.capacity).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="dateFrom">From: </label>
                  <input
                    type="date"
                    name="dateFrom"
                    id="dateFrom"
                    value={reservationData.dateFrom}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
                <div>
                  <label htmlFor="dateTo">To: </label>
                  <input
                    type="date"
                    name="dateTo"
                    id="dateTo"
                    value={reservationData.dateTo}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
                <div>
                  <span>Price: </span>
                  &euro;{reservationData.price}
                </div>
                <Button type="submit" className="btnBook">
                  Book
                </Button>
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
              <VillaReview
                reviews={currentVilla.reviews}
                isAuthenticated={isAuthenticated}
              />
            </div>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </PageTransitionAnimation>
  );
};
