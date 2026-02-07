import React, { useEffect, useState, useMemo } from 'react';
import '../App.css';
import FancyList from '../helpers/FancyList';
import Skeleton from '../components/Skeleton';
import SearchBar from '../components/SearchBar';
import _ from 'lodash';

interface Breed {
  breed: string;
  country: string;
  pattern: string;
}

function Breeds() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBreeds();
  }, []);

  const cleanUpData = (data: Breed[]): Breed[] =>
    _.map(data, e => _.pick(e, ['breed', 'country', 'pattern']) as Breed);

  const filteredBreeds = useMemo(() => {
    if (!searchQuery) return breeds;

    const query = searchQuery.toLowerCase();
    return breeds.filter(
      breed =>
        breed.breed.toLowerCase().includes(query) ||
        breed.country.toLowerCase().includes(query) ||
        breed.pattern.toLowerCase().includes(query)
    );
  }, [breeds, searchQuery]);

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
      <SearchBar
        onSearch={setSearchQuery}
        placeholder="Search breeds by name, country, or pattern..."
      />
      {searchQuery && (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          Found {filteredBreeds.length} breed{filteredBreeds.length !== 1 ? 's' : ''}
        </p>
      )}
      <FancyList data={cleanUpData(filteredBreeds)} />
    </div>
  );
}

export default Breeds;
