import React, { useEffect, useState } from 'react';
import '../App.css';
import '../styles/CatDetail.css';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
        const res_json = await res.json();
        setCatData(res_json);
      } catch (error) {
        console.error('Failed to fetch cat details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatData();
  }, [id]);

  const shareUrl = window.location.href;

  if (loading) {
    return (
      <div className="cat-detail-page">
        <div className="detail-loading">
          <div className="loading-content">
            <div className="loading-spinner">///</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cat-detail-page">
      <div className="detail-hero">
        <div className="detail-header">
          <h1 className="detail-title">Cat Details</h1>
          {id && <div className="detail-id">ID: {id}</div>}
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-image-section">
          {catData.url && (
            <div className="detail-image-frame">
              <img src={catData.url} alt="Cat" />
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
        </div>

        <div className="detail-sidebar">
          <div className="detail-info-card">
            <div className="info-label">Image ID</div>
            <div className="info-value">{id || 'N/A'}</div>

            {catData.width && catData.height && (
              <>
                <div className="info-label">Dimensions</div>
                <div className="info-value">{catData.width} × {catData.height}px</div>
              </>
            )}

            <div className="info-label">Aspect Ratio</div>
            <div className="info-value">
              {catData.width && catData.height
                ? (catData.width / catData.height).toFixed(2)
                : 'N/A'}
            </div>
          </div>

          <div className="detail-actions">
            <ShareButton
              url={shareUrl}
              title="Check out this cute cat!"
              text="Look at this adorable cat I found!"
            />
            <Link to="/cats" className="back-link">
              <button className="detail-button">← Back to Gallery</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="detail-footer">
        <div className="footer-decoration">///</div>
      </div>
    </div>
  );
}

export default CatDetail;
