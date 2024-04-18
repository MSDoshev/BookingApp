import styles from "./Gallery.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import GalleryModal from "./GalleryModal/GalleryModal";

import { uiActions } from "../../store/ui-slice";
import { fetchGalleryData } from "../../store/gallery-actions";
import { fadeInAnimation } from "../../util/animation";
import PageTransitionAnimation from "../PageTransitionAnimation/PageTransitionAnimation";

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const showModal = useSelector((state) => state.ui.galleryModalIsVisible);
  const imageData = useSelector((state) => state.ui.imagesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  const openModal = (index) => {
    dispatch(uiActions.toggle());
    setSelectedImageIndex(index);
  };

  const navigateImage = (direction) => {
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : imageData.length - 1
      );
    } else if (direction === "next") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex < imageData.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <PageTransitionAnimation>
      <div className={styles.title}>
        <motion.h1
          animate={{ y: [-50, 0], opacity: [0, 1] }}
          transition={fadeInAnimation.transition}
        >
          The Gallery
        </motion.h1>
      </div>
      <motion.div
        className={styles.gallery}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={fadeInAnimation.transition}
      >
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            onClick={() => openModal(index)}
          />
        ))}
      </motion.div>
      {showModal && (
        <GalleryModal
          navigateImage={navigateImage}
          image={imageData[selectedImageIndex]}
        />
      )}
    </PageTransitionAnimation>
  );
};
