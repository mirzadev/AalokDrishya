import React, { useState } from "react";
import "./CommercialStyles.css";
import image1 from "../../Assets/Work/Commercial/0.jpg";
import image2 from "../../Assets/Work/Commercial/1.jpg";
import image3 from "../../Assets/Work/Commercial/2.jpg";
import image4 from "../../Assets/Work/Commercial/3.jpg";
import image5 from "../../Assets/Work/Commercial/4.jpg";
import image6 from "../../Assets/Work/Commercial/Wedding-1.jpg";
import image7 from "../../Assets/Work/Commercial/Wedding-2.jpg";
import image8 from "../../Assets/Work/Commercial/Wedding-3.jpg";
import image9 from "../../Assets/Work/Commercial/Wedding-4.jpg";
import image10 from "../../Assets/Work/Commercial/Wedding-5.jpg";
import image11 from "../../Assets/Work/Commercial/Wedding-6.jpg";
import image12 from "../../Assets/Work/Commercial/Wedding-7.jpg";
import image13 from "../../Assets/Work/Commercial/Wedding-8.jpg";
import image14 from "../../Assets/Work/Commercial/Wedding-9.jpg";
import image15 from "../../Assets/Work/Commercial/Wedding-10.jpg";
import image16 from "../../Assets/Work/Commercial/Wedding-11.jpg";
import image17 from "../../Assets/Work/Commercial/Wedding-12.jpg";
import image18 from "../../Assets/Work/Commercial/Wedding-13.jpg";
import image19 from "../../Assets/Work/Commercial/Wedding-14.jpg";
import image20 from "../../Assets/Work/Commercial/Wedding-15.jpg";
import image21 from "../../Assets/Work/Commercial/Wedding-16.jpg";

//import "./PortfolioItems";

const CommercialGallery = () => {
  // Array to hold image file paths
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index for current image in modal

  // Open modal and set the selected image
  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Commercial">
      <h1>COMMERCIAL GALLERY</h1>

      {/* Display the image thumbnails in a grid */}
      <div className="gallery">
        {images.map((image, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => openModal(index)}
          >
            <img src={image} alt={`thumbnail-${index}`} />
          </div>
        ))}
      </div>

      {/* Modal for image enlargement */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Back Arrow */}
            <button className="arrow-button prev" onClick={prevImage}>
              &lt;
            </button>

            <img
              src={images[currentImageIndex]}
              alt={`modal-img-${currentImageIndex}`}
              className="modal-image"
            />

            {/* Next Arrow */}
            <button className="arrow-button next" onClick={nextImage}>
              &gt;
            </button>

            <button className="close" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommercialGallery;
