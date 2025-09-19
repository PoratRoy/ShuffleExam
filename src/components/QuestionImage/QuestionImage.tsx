'use client';

import React from 'react';
import Image from 'next/image';
import styles from './QuestionImage.module.css';

interface QuestionImageProps {
  imageName: string;
  imagePath: string;
}

const QuestionImage: React.FC<QuestionImageProps> = ({ imageName, imagePath }) => {
  // For now, we'll use a dynamic import approach since the images are in src/assets
  // In a production setup, these should be moved to public/assets
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        // Dynamic import for images in src/assets
        const imageModule = await import(`../../assets/${imageName}.png`);
        setImageSrc(imageModule.default);
      } catch (error) {
        console.warn(`Failed to load image: ${imageName}.png`, error);
        setImageError(true);
      }
    };

    if (imageName) {
      loadImage();
    } else {
      setImageError(true);
    }
  }, [imageName]);

  if (imageError || !imageSrc) {
    return null; // Don't render anything if image fails to load or is not available
  }

  return (
    <div className={styles.imageContainer}>
      <Image
        src={imageSrc}
        alt={`Question image ${imageName}`}
        width={600}
        height={400}
        className={styles.questionImage}
        priority={false}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onError={(e) => {
          console.warn(`Image failed to load: ${imageName}`);
          setImageError(true);
        }}
      />
    </div>
  );
};

export default QuestionImage;
