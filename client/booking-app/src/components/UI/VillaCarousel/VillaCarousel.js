import React, { useState } from "react";
import styles from "./VillaCarousel.module.css";
import { motion } from "framer-motion";
const VillaCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrev}>&#10094;</button>
      <motion.img
        key={currentImageIndex}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
        src={images[currentImageIndex]}
        alt="Villa"
      />
      <button onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default VillaCarousel;
