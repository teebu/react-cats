import React, { useEffect, useState, useCallback } from 'react';
import '../App.css';
import '../styles/Cats.css';
import ImageHolder from '../helpers/ImageHolder';
import { Link } from 'react-router-dom';
import ImageGridSkeleton from '../components/ImageGridSkeleton';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import FavoriteButton from '../components/FavoriteButton';

interface CatData {
  id: string;
  url: string;
  width?: number;
  height?: number;
}

interface CatsProps {
  size?: number;
}

function Cats({ size = 15 }: CatsProps) {
  const [catsData, setCatsData] = useState<CatData[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchCatData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Only show skeleton if loading takes longer than 300ms
    const skeletonTimer = setTimeout(() => {
      if (catsData.length === 0) {
        setShowSkeleton(true);
      }
    }, 300);

    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${size}&order=random&size=small`
      );
      const res_json = await res.json();

      if (res_json.length === 0) {
        setHasMore(false);
      } else {
        setCatsData(prev => [...prev, ...res_json]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Failed to fetch cats:', error);
    } finally {
      clearTimeout(skeletonTimer);
      setLoading(false);
      setShowSkeleton(false);
    }
  }, [size, loading, hasMore, catsData.length]);

  useEffect(() => {
    fetchCatData();
  }, []);

  const loadMoreRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: fetchCatData,
  });

  return (
    <div className="cats-page">
      <div className="page-header">
        <div className="header-decoration"></div>
        <h1 className="page-title">
          <span className="title-index">CATALOG</span>
          EXPLORE CATS
        </h1>
        <div className="header-count">
          {catsData.length} <span className="count-label">LOADED</span>
        </div>
      </div>

      {catsData.length === 0 && showSkeleton ? (
        <ImageGridSkeleton count={size} />
      ) : catsData.length === 0 && loading ? (
        <div style={{ minHeight: '60vh' }} />
      ) : (
        <>
          <div className="brutalist-grid">
            {catsData.map((cat, index) => (
              <div key={`${cat.id}-${index}`} className="grid-item">
                <div className="item-number">{String(index + 1).padStart(3, '0')}</div>
                <Link to={`/cat/${cat.id}`} className="image-wrapper">
                  <ImageHolder
                    width={cat.width}
                    height={cat.height}
                    maxWidth={400}
                    maxHeight={400}
                    style={{ borderRadius: '0' }}
                    delay={100}
                    src={cat.url}
                    alt={`Cat ${index + 1}`}
                  />
                  <div className="image-overlay">VIEW</div>
                </Link>
                <FavoriteButton
                  catId={cat.id}
                  catUrl={cat.url}
                  width={cat.width}
                  height={cat.height}
                />
              </div>
            ))}
          </div>

          <div ref={loadMoreRef} style={{ height: '20px', margin: '2rem 0' }} />

          {loading && (
            <div className="loading-state">
              <div className="loading-bar"></div>
              <p className="loading-text">LOADING MORE CATS...</p>
            </div>
          )}

          {!hasMore && catsData.length > 0 && (
            <div className="end-state">
              <div className="end-marker">///</div>
              <p>END OF CATALOG</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cats;
