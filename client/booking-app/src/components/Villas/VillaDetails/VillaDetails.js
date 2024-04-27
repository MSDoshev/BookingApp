import React, { useEffect, useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button";
import PageTransitionAnimation from "../../PageTransitionAnimation/PageTransitionAnimation";
import VillaCarousel from "../../UI/VillaCarousel/VillaCarousel";
import { fetchVillasData } from "../../../store/villa-actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VillaReview from "./VillaReview/VillaReview";
import { addReservationForUser } from "../../../store/user-actions";

const images = [
  "https://www.vacation-key.com/photos/1/0/106720-1.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/1b/d3/ba/26/m-one-villa-private-pool.jpg",
  "https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp",
];

export const VillaDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const villasData = useSelector((state) => state.ui.villasData);
  const currentVilla = villasData.find((villa) => villa.id === parseInt(id));
  const [reservationData, setReservationData] = useState({
    villa: currentVilla,
    guests: 1,
    dateFrom: "",
    dateTo: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addReservationForUser(reservationData));
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(fetchVillasData());
  }, [dispatch]);

  return (
    <PageTransitionAnimation>
      {currentVilla ? (
        <>
          <div className={styles.title}>
            <div className={styles.title}>
              <h1>{currentVilla.title}</h1>
            </div>
          </div>
          <div className={styles.villaContainer}>
            <div className={styles.picture}>
              <VillaCarousel images={images} />
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
                  ></input>
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
              <VillaReview />
            </div>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </PageTransitionAnimation>
  );
};
