import React, {useEffect, useState} from 'react';
import '../App.css';
import ProgressiveImage from "react-progressive-graceful-image";
import './utils'
import {removeNull} from "./utils";

function ImageHolder({src, width, height, maxWidth, maxHeight, style, className, alt, delay, placeholder}) {

  let imgStyle = {
    width: Fit(width, height, maxWidth, maxHeight).width,
    height: Fit(width, height, maxWidth, maxHeight).height,
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    ...style
  };

  imgStyle = removeNull(imgStyle); // remove null values

  const plainHolder = (
    <div className="placeHolder animate"
         style={imgStyle}
    />
  )

  return (
    <>
      {placeholder}
      <ProgressiveImage
        delay={delay}
        src={src} placeholder=''>
        {(src, loading) => {
          return loading ? placeholder || plainHolder : <img src={src} alt={alt} className={className} style={imgStyle}/>
        }}
      </ProgressiveImage>
      </>
  );
}

function Fit(srcWidth, srcHeight, maxWidth, maxHeight) {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return {width: srcWidth * ratio, height: srcHeight * ratio};
}

export default ImageHolder;
