import React, { useEffect, useState } from 'react';
import '../App.css';
import FancyList from '../helpers/FancyList';
import _ from 'lodash';

function Facts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetchFacts();
  }, []);

  const cleanUpData = data => _.map(data, e => _.pick(e, ['fact']));

  const fetchFacts = async () => {
    const res = await fetch(
      'https://catfact.ninja/facts?limit=15&max_length=140'
    );
    const res_json = await res.json();
    setFacts(res_json.data);
  };

  return (
    <div>
      <h1>Random Cat Facts</h1>
      <FancyList data={cleanUpData(facts)} />
    </div>
  );
}

export default Facts;
