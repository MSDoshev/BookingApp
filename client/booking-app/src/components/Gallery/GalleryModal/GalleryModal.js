import { useDispatch } from "react-redux";

import { uiActions } from "../../../store/ui-slice";

import styles from "./GalleryModal.module.css";



export default function GalleryModal({ navigateImage, image }) {
  const dispatch = useDispatch();

  const toggleImageHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={toggleImageHandler}>
        &times;
      </span>
      <img className={styles.modalContent} src={image.url} alt={image.alt} />
      <span className={styles.prev} onClick={() => navigateImage("prev")}>
        &#10094;
      </span>
      <span className={styles.next} onClick={() => navigateImage("next")}>
        &#10095;
      </span>
    </div>
  );
}
