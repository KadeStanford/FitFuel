import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    '/images/lift.jpg',
    '/images/rope.jpg',
    '/images/yoga.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setNextImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Slideshow"
          style={{
            width: '100%',
            height: '80%',
            objectFit: 'cover',
            position: 'absolute',
            opacity:
              index === currentImageIndex
                ? 1
                : index === nextImageIndex
                ? 0.01
                : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex:
              index === currentImageIndex || index === nextImageIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
