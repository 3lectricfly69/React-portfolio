import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../../pages/Galley/GalleryPage.css";  // Importing the CSS file
import "../styles/GalleryPage.css" //Importing the CSS file


const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample image data (you can modify this with actual image URLs)
  const images = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    src: `../src/images/Red_square.svg.png`,  // Replace with your actual image path
    alt: `Image ${index + 1}`,
  }));

  // Handle opening the lightbox with the clicked image
  const openLightbox = (src) => {
    setSelectedImage(src);
  };

  // Handle closing the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="galleryPage">
      <Header />

      <div className="galleryGrid">
        {images.map((image) => (
          <div
            key={image.id}
            className="galleryItem"
            onClick={() => openLightbox(image.src)}
          >
            <img className="galleryImage" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img className="lightboxImage" src={selectedImage} alt="Selected" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
