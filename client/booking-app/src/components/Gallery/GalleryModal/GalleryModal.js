import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { uiActions } from "../../../store/ui-slice";

import styles from "./GalleryModal.module.css";
import { fadeInAnimation } from "../../../util/animation";

export default function GalleryModal({ navigateImage, image }) {
  const dispatch = useDispatch();

  const toggleImageHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeInAnimation.transition}
      className={styles.modal}
    >
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
    </motion.div>
  );
}
