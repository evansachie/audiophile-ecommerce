import { useState } from 'react';
import type { ResponsiveImage as ResponsiveImageType } from '../../../types';

export interface ResponsiveImageProps {
  image: ResponsiveImageType;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const ResponsiveImage = ({
  image,
  alt,
  className = '',
  priority = false
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-center">
          Image not found
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={alt}
          className={`w-full h-auto ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </div>
  );
};
