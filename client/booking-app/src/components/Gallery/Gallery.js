import styles from "./Gallery.module.css"
// import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

export const Gallery = () => {
    const images = [
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 1 description',
      },
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
        alt: 'Image 2 description',
      },
      {
        url: 'https://s3-eu-central-1.amazonaws.com/loggia-cdn/lodgeContent/164b11225e28a38808a5b62d6808f439.webp',
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
  
    return (
        <>
        <div className={styles.title}>
            <h2> The Gallery</h2>
        </div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.alt} />
        ))}
      </div>
      </>
    );
  };