import React, { useState, useEffect, useRef } from 'react';

interface ProgressiveImageProps {
  src: string;
  placeholder?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholder = '',
  alt = '',
  className = '',
  style = {},
  delay = 0,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer to detect when image enters viewport
  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading slightly before entering viewport
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // Load the actual image when in viewport
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = src;

    const loadImage = () => {
      if (delay > 0) {
        setTimeout(() => {
          setImageSrc(src);
          setIsLoaded(true);
          onLoad?.();
        }, delay);
      } else {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      }
    };

    img.onload = loadImage;
    img.onerror = () => {
      onError?.();
      setIsLoaded(true);
    };

    // If image is already cached, it will load immediately
    if (img.complete) {
      loadImage();
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [isInView, src, delay, onLoad, onError]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || placeholder}
      alt={alt}
      className={`${className} ${!isLoaded ? 'progressive-loading' : 'progressive-loaded'}`}
      style={{
        ...style,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.5,
      }}
    />
  );
};

export default ProgressiveImage;
