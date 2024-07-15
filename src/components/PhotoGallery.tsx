import React, { useEffect, useState } from 'react';
import photo1 from '../photos/Evette R-7.jpg'
import photo2 from '../photos/IMG_3063.jpg'
import photo3 from '../photos/IMG_3080.jpg'
import photo4 from '../photos/IMG_8312.jpg'
import photo5 from '../photos/IMG_8331.jpg'
import photo6 from '../photos/IMG_8348.jpg'
import { AnimatePresence, motion } from 'framer-motion';
const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        {photos.map((photo, index) => (
          index === currentIndex && (
            <motion.img
              key={index}
              src={photo.toString()}
              alt={`Photo ${index}`}
              className="absolute top-0 left-0 h-full w-screen object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
