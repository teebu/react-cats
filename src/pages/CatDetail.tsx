import React, { useEffect, useState } from 'react';
import '../App.css';
import ProgressiveImage from 'react-progressive-graceful-image';
import ImageHolder from '../helpers/ImageHolder';
import { Link, useParams } from 'react-router-dom';

function CatDetail() {
  const { id } = useParams();
  const [catData, setCatData] = useState({ url: null });

  useEffect(() => {
    const fetchCatData = async () => {
      const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
      const res_json = await res.json();
      setCatData(res_json);
    };

    fetchCatData();
  }, [id]);

  const imgStyle = { maxWidth: '600px', maxHeight: '600px' };

  return (
    <div>
      <h1>Cat Details</h1>
      <img src={catData.url} style={imgStyle} alt="" />
      <div>{catData.url}</div>
    </div>
  );
}

export default CatDetail;
