import React, {useEffect, useState} from 'react';
import '../App.css';
import ProgressiveImage from "react-progressive-graceful-image";

function ImageHolder({src, width, height, style, className, alt, delay, placeholder}) {

  const plainHolder = (
    <div className="placeHolder animate"
         style={{
           width: width,
           height: height,
           ...style
         }}
    />
  )
  return (
      <ProgressiveImage
        delay={delay}
        src={src} placeholder=''>
        {(src, loading) => {
          return loading ? placeholder || plainHolder : <img src={src} alt={alt} className={className} style={{...style}}/>
        }}
      </ProgressiveImage>
  );
}

function Fit(srcWidth, srcHeight, maxWidth, maxHeight) {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return {width: srcWidth * ratio, height: srcHeight * ratio};
}

export default ImageHolder;
