import React, { useEffect, useState, useMemo } from 'react';
import '../App.css';
import '../styles/DataPage.css';
import FancyList from '../helpers/FancyList';
import Skeleton from '../components/Skeleton';
import SearchBar from '../components/SearchBar';
import _ from 'lodash';

interface Fact {
  fact: string;
}

function Facts() {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchFacts();
  }, []);

  const cleanUpData = (data: Fact[]): Fact[] => _.map(data, e => _.pick(e, ['fact']) as Fact);

  const filteredFacts = useMemo(() => {
    if (!searchQuery) return facts;

    const query = searchQuery.toLowerCase();
    return facts.filter(fact => fact.fact.toLowerCase().includes(query));
  }, [facts, searchQuery]);

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
        <Skeleton height="40px" width="280px" borderRadius="0px" />
        <div style={{ marginTop: '1rem' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ marginBottom: '0.5rem' }}>
              <Skeleton height="50px" borderRadius="0px" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="data-page facts-page">
      <div className="page-header-full">
        <div className="header-stripe facts-stripe"></div>
        <h1 className="page-title-full">
          <span className="title-prefix">TRIVIA //</span>
          CAT FACTS
        </h1>
        <div className="search-wrapper">
          <SearchBar onSearch={setSearchQuery} placeholder="SEARCH: KEYWORDS" />
        </div>
        {searchQuery && (
          <div className="results-count">
            <span className="count-number">{filteredFacts.length}</span>
            <span className="count-text">FACTS MATCH</span>
          </div>
        )}
      </div>
      <FancyList data={cleanUpData(filteredFacts)} type="facts" />
    </div>
  );
}

export default Facts;
