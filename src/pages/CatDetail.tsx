import React, { useEffect, useState } from 'react';
import '../App.css';
import ProgressiveImage from 'react-progressive-graceful-image';
import ImageHolder from '../helpers/ImageHolder';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import { Link, useParams } from 'react-router-dom';

interface CatData {
  url: string | null;
  width?: number;
  height?: number;
  id?: string;
}

function CatDetail() {
  const { id } = useParams<{ id: string }>();
  const [catData, setCatData] = useState<CatData>({ url: null });

  useEffect(() => {
    const fetchCatData = async () => {
      const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
      const res_json = await res.json();
      setCatData(res_json);
    };

    fetchCatData();
  }, [id]);

  const imgStyle = { maxWidth: '600px', maxHeight: '600px' };

  const shareUrl = window.location.href;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cat Details</h1>
      {catData.url && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={catData.url} style={imgStyle} alt="Cat" />
          {id && (
            <FavoriteButton
              catId={id}
              catUrl={catData.url}
              width={catData.width}
              height={catData.height}
            />
          )}
        </div>
      )}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <ShareButton url={shareUrl} title="Check out this cute cat!" text="Look at this adorable cat I found!" />
        <Link to="/cats" style={{ textDecoration: 'none' }}>
          <button className="share-button">← Back to Cats</button>
        </Link>
      </div>
    </div>
  );
}

export default CatDetail;
