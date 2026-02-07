import React, { useEffect, useState } from 'react';
import '../App.css';
import FancyList from '../helpers/FancyList';
import Skeleton from '../components/Skeleton';
import _ from 'lodash';

function Facts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFacts();
  }, []);

  const cleanUpData = data => _.map(data, e => _.pick(e, ['fact']));

  const fetchFacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://catfact.ninja/facts?limit=15&max_length=140'
      );
      const res_json = await res.json();
      setFacts(res_json.data);
    } catch (error) {
      console.error('Failed to fetch facts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem' }}>
        <Skeleton height="40px" width="280px" borderRadius="8px" />
        <div style={{ marginTop: '1rem' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ marginBottom: '0.5rem' }}>
              <Skeleton height="50px" borderRadius="8px" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Random Cat Facts</h1>
      <FancyList data={cleanUpData(facts)} />
    </div>
  );
}

export default Facts;
