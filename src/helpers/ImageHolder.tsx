import React, { useState } from 'react';
import '../App.css';
import ProgressiveImage from '../components/ProgressiveImage';
import './utils';
import { removeEmpty } from './utils';

interface ImageHolderProps {
  src: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  style?: React.CSSProperties;
  className?: string;
  alt?: string;
  delay?: number;
  placeholder?: React.ReactNode;
}

function ImageHolder({
  src,
  width,
  height,
  maxWidth,
  maxHeight,
  style,
  className,
  alt,
  delay,
  placeholder,
}: ImageHolderProps) {
  const [isLoading, setIsLoading] = useState(true);

  let imgStyle = {
    width: Fit(width, height, maxWidth, maxHeight).width,
    height: Fit(width, height, maxWidth, maxHeight).height,
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    ...style,
  };

  imgStyle = removeEmpty(imgStyle); // remove null values

  const plainHolder = <div className="placeHolder animate" style={imgStyle} />;

  return (
    <>
      {isLoading && (placeholder || plainHolder)}
      <ProgressiveImage
        src={src}
        alt={alt || ''}
        className={className}
        style={imgStyle}
        delay={delay}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

function Fit(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

export default ImageHolder;
