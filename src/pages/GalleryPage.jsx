import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import "../styles/GalleryPage.css"; // Importing the CSS file

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image paths
  const images = [
    { id: 1, src: "/images/no.1Gi/1.jpg", alt: "Image 1" },
    { id: 2, src: "/images/no.1Gi/eleven.jpg", alt: "Image 2" },
    { id: 3, src: "/images/no.1Gi/9.jpg", alt: "Image 3" },
    { id: 4, src: "/images/no.1Gi/sixteen.jpg", alt: "Image 4" },
    { id: 5, src: "/images/no.1Gi/nineteen.jpg", alt: "Image 5" },
    { id: 6, src: "/images/no.1Gi/twelve.jpg", alt: "Image 6" },
    { id: 7, src: "/images/no.1Gi/spree.jpg", alt: "Image 7"},
    { id: 8, src: "/images/no.1Gi/twenty.jpg", alt: "Image 8" },
    { id: 9, src: "/images/no.1Gi/eighteen.jpg", alt: "Image 9" },
    { id: 10, src: "/images/no.1Gi/ten.jpg", alt: "Image 10" },
    { id: 11, src: "/images/no.1Gi/fourteen.jpg", alt: "Image 11" },
    { id: 12, src: "/images/no.1Gi/fifteen.jpg", alt: "Image 12" },
    { id: 13, src: "/images/no.1Gi/six.jpg", alt: "Image 13" },
    { id: 14, src: "/images/no.1Gi/seventeen.jpg", alt: "Image 14" },
    { id: 15, src: "/images/no.1Gi/globus.jpg", alt: "Image 15" },
    { id: 16, src: "/images/no.1Gi/five.jpg", alt: "Image 16" },
    { id: 17, src: "/images/no.1Gi/four.jpg", alt: "Image 17" },
    { id: 18, src: "/images/no.1Gi/supple.jpg", alt: "Image 18" },
    { id: 19, src: "/images/no.1Gi/two.jpg", alt: "Image  19" },
    { id: 20, src: "/images/no.1Gi/one.jpg", alt: "Image 20" }
  ];

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
      {/* <Header /> */}

      <div className="galleryGrid">
        {images.map((image) => (
          <div
            key={image.id}
            className="galleryItem"
            onClick={() => openLightbox(image.src)}
          >
            <img className="galleryImage" src={images[image.id - 1].src} alt={images[image.id - 1].alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img className="lightboxImage" src={selectedImage} alt="Selected" />
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default GalleryPage;
