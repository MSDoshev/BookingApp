import styles from "./Gallery.module.css";

import { useSelector, useDispatch } from "react-redux";
// import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import GalleryModal from "./GalleryModal/GalleryModal";

import { uiActions } from "../../store/ui-slice";
import { fetchGalleryData } from "../../store/gallery-actions";

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
    <>
      <div className={styles.title}>
        <h1> The Gallery</h1>
      </div>
      <div className={styles.gallery}>
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {showModal && (
        <GalleryModal
          navigateImage={navigateImage}
          image={imageData[selectedImageIndex]}
        />
      )}
    </>
  );
};
