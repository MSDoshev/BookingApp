import styles from "./Gallery.module.css"
// import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import { useState } from "react";

export const Gallery = () => {
    const images = [
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 1 description',
      },
      {
        url: 'https://www.vacation-key.com/photos/1/0/106720-1.jpg',
        alt: 'Image 2 description',
      },
      {
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/d3/ba/26/m-one-villa-private-pool.jpg',
        alt: 'Image 3 description',
      },
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 4 description',
      },
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 5 description',
      },
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 6 description',
      },
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 7 description',
      },
    ];


    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setShowModal(true);
        setSelectedImageIndex(index);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    
      const navigateImage = (direction) => {
        if (direction === 'prev') {
          setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
        } else if (direction === 'next') {
          setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        }
      };
  

  
    return (
        <>
        <div className={styles.title}>
            <h1> The Gallery</h1>
        </div>
        <div className={styles.gallery}>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.alt} onClick={() => openModal(index)} />
        ))}
      </div>
      {showModal && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <img className={styles.modalContent} src={images[selectedImageIndex].url} alt={images[selectedImageIndex].alt} />
          <span className={styles.prev} onClick={() => navigateImage('prev')}>
            &#10094;
          </span>
          <span className={styles.next} onClick={() => navigateImage('next')}>
            &#10095;
          </span>
        </div>
        )}
      </>
    );
  };