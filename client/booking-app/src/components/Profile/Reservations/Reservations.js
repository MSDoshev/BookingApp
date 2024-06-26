import styles from "./Reservations.module.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { removeReservationForUser } from "../../../store/user-actions";
export default function Reservations({ reservations, setReservations }) {
  const dispatch = useDispatch();
  function handleCancel(key) {
    dispatch(removeReservationForUser(key));

    const updatedReservations = Object.fromEntries(
      Object.entries(reservations).filter(
        ([reservationKey]) => reservationKey !== key
      )
    );
    setReservations((prevUserData) => ({
      ...prevUserData,
      reservations: updatedReservations,
    }));
  }
  return (
    <>
      {reservations && Object.values(reservations).length > 0 ? (
        <motion.ul
          animate={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 0.5 }}
          className={styles.reservationsContainerAll}
        >
          {Object.entries(reservations).map(([key, reservation]) => (
            <li key={key} className={styles.reservationContainer}>
              <img src={reservation.villa.image.url} alt="" />
              <div className={styles.reservationTextInfo}>
                <h2>{reservation.villa.title}</h2>
                <div className={styles.reservationInfo}>
                  <p>
                    <span>Guests: </span>
                    {reservation.guests}
                  </p>
                  <p>
                    <span>From: </span>
                    {reservation.dateFrom}
                  </p>
                  <p>
                    <span>To: </span>
                    {reservation.dateTo}
                  </p>
                  <p>
                    <span>Price: </span>
                    &euro;{reservation.price}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleCancel(key)}
                >
                  Cancel
                </motion.button>
              </div>
            </li>
          ))}
        </motion.ul>
      ) : (
        <div className={styles.placeholder}>
          <p>No reservations yet..</p>
        </div>
      )}
    </>
  );
}
