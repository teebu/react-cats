import React, { useEffect, useState, useCallback } from 'react';
import '../App.css';
import ImageHolder from '../helpers/ImageHolder';
import { Link } from 'react-router-dom';
import FancyList from '../helpers/FancyList';
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
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchCatData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
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
      setLoading(false);
    }
  }, [size, loading, hasMore]);

  useEffect(() => {
    fetchCatData();
  }, []);

  const loadMoreRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: fetchCatData,
  });

  return (
    <div>
      <h1>Explore Cats</h1>
      {catsData.length === 0 && loading ? (
        <ImageGridSkeleton count={size} />
      ) : (
        <>
          <ul className="fancy-img-list shadowlink">
            {catsData.map((cat, index) => (
              <li key={`${cat.id}-${index}`} style={{ borderRadius: '120px', position: 'relative' }}>
                <Link to={`/cat/${cat.id}`}>
                  <ImageHolder
                    width={cat.width}
                    height={cat.height}
                    maxWidth={200}
                    maxHeight={200}
                    style={{ borderRadius: '90px' }}
                    delay={100}
                    src={cat.url}
                    alt="cat"
                  />
                </Link>
                <FavoriteButton
                  catId={cat.id}
                  catUrl={cat.url}
                  width={cat.width}
                  height={cat.height}
                />
              </li>
            ))}
          </ul>

          {/* Infinite scroll trigger */}
          <div ref={loadMoreRef} style={{ height: '20px', margin: '2rem 0' }} />

          {/* Loading indicator */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '3rem',
                  animation: 'spin 1s linear infinite',
                }}
              >
                🐱
              </div>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                Loading more cats...
              </p>
            </div>
          )}

          {/* End of results */}
          {!hasMore && catsData.length > 0 && (
            <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
              You've seen all the cats! 😺
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Cats;
