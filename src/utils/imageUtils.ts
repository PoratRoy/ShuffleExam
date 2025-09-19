/**
 * Utility functions for managing question images
 */

// List of available images in the assets folder
export const AVAILABLE_IMAGES = [
  'IMG-12',
  'IMG-1_013', 
  'IMG-1_019'
] as const;

export type AvailableImageName = typeof AVAILABLE_IMAGES[number];

/**
 * Check if an image is available in the assets folder
 */
export function isImageAvailable(imageName: string): imageName is AvailableImageName {
  return AVAILABLE_IMAGES.includes(imageName as AvailableImageName);
}

/**
 * Extract image name from hasImage string
 * @param hasImage - String like "{IMG-12}" or "IMG-12"
 * @returns Clean image name like "IMG-12"
 */
export function extractImageName(hasImage: string): string {
  return hasImage.replace(/[{}]/g, '');
}

/**
 * Get the full image path for a given image name
 * @param imageName - Clean image name like "IMG-12"
 * @returns Full path to the image
 */
export function getImagePath(imageName: string): string {
  return `/src/assets/${imageName}.png`;
}

/**
 * Validate and get image information
 * @param hasImage - Raw hasImage string from question
 * @returns Object with image info or null if invalid
 */
export function getImageInfo(hasImage?: string): {
  name: string;
  path: string;
  isAvailable: boolean;
} | null {
  if (!hasImage) {
    return null;
  }

  const imageName = extractImageName(hasImage);
  const isAvailable = isImageAvailable(imageName);
  
  return {
    name: imageName,
    path: getImagePath(imageName),
    isAvailable
  };
}

/**
 * Log missing images for debugging
 */
export function logMissingImages() {
  console.log('=== Image Availability Report ===');
  console.log('Available images:', AVAILABLE_IMAGES);
  console.log('Missing images that are referenced:');
  console.log('- IMG-1_016 (referenced by questions 1_016, 1_017, 1_018)');
}
