import React, { useEffect, useState } from 'react';
import '../App.css';
import ImageHolder from '../helpers/ImageHolder';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';

interface CatProps {
  maxWidth?: number;
  maxHeight?: number;
  borderRadius?: string;
  delay?: number;
}

interface CatData {
  id?: string;
  url: string | null;
  width?: number;
  height?: number;
}

function Cat({
  maxWidth = 200,
  maxHeight = 200,
  borderRadius = '90px',
  delay = 100,
}: CatProps) {
  const [catData, setCatData] = useState<CatData[]>([{ url: null }]);

  const fetchCatData = async () => {
    const res = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=1&order=random&size=medium&'
    );
    const res_json = await res.json();
    setCatData(res_json);
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const imgStyle = {
    width: Fit(
      catData[0].width || maxWidth,
      catData[0].height,
      maxWidth,
      maxHeight
    ).width,
    height: Fit(
      catData[0].width || maxWidth,
      catData[0].height,
      maxWidth,
      maxHeight
    ).height,
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    borderRadius: borderRadius,
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {catData[0].id && catData[0].url && (
        <FavoriteButton
          catId={catData[0].id}
          catUrl={catData[0].url}
          width={catData[0].width}
          height={catData[0].height}
        />
      )}
      <Link to={`/cat/${catData[0].id}`} className="shadowlink">
        <ImageHolder
          style={{
            width: catData[0].width,
            height: catData[0].height,
            ...imgStyle,
          }}
          delay={delay}
          src={catData[0].url}
          alt="cat"
        />
      </Link>
    </div>
  );
}

function Fit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number): { width: number; height: number } {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

export default Cat;
