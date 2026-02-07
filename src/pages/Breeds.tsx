import React, { useEffect, useState } from 'react';
import '../App.css';
import FancyList from '../helpers/FancyList';
import Skeleton from '../components/Skeleton';
import _ from 'lodash';

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const cleanUpData = data =>
    _.map(data, e => _.pick(e, ['breed', 'country', 'pattern']));

  const fetchBreeds = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://catfact.ninja/breeds?limit=30');
      const res_json = await res.json();
      setBreeds(res_json.data);
    } catch (error) {
      console.error('Failed to fetch breeds:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem' }}>
        <Skeleton height="40px" width="200px" borderRadius="8px" />
        <div style={{ marginTop: '1rem' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} style={{ marginBottom: '0.5rem' }}>
              <Skeleton height="60px" borderRadius="8px" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Cat Breeds</h1>
      <FancyList data={cleanUpData(breeds)} />
    </div>
  );
}

export default Breeds;
