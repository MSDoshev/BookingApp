import Button from "../Button";
import styles from "./FeedbackModal.module.css";

export default function FeedbackModal({ visible, onClose, message }) {
  return (
    <div className={`${styles.modal} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.modalContent}>
        {/* <span className={styles.close} onClick={onClose}>
          &times;
        </span> */}

        <p>{message}</p>

        <div className={styles.btnContainer}>
          <Button onClick={onClose} className="btnSubmit">Okay</Button>
        </div>
      </div>
    </div>
  );
}
