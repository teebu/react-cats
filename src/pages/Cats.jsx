import React, { useEffect, useState } from 'react';
import '../App.css';
import ProgressiveImage from 'react-progressive-graceful-image';
import ImageHolder from '../helpers/ImageHolder';
import { Link } from 'react-router-dom';
import FancyList from '../helpers/FancyList';
import ImageGridSkeleton from '../components/ImageGridSkeleton';

function Cats({ size = 5 }) {
  const [catsData, setCatsData] = useState([{ url: null }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=${size}&order=random&size=small`
        );
        const res_json = await res.json();
        setCatsData(res_json);
      } catch (error) {
        console.error('Failed to fetch cats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatData();
  }, [size]);

  if (loading) {
    return <ImageGridSkeleton count={size} />;
  }

  return (
    <ul className="fancy-img-list shadowlink">
      {catsData.map(cat => (
        <li key={cat.id || cat.url} style={{ borderRadius: '120px' }}>
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
        </li>
      ))}
    </ul>
  );
}

export default Cats;
