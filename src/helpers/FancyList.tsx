import React from 'react';
import '../App.css';
import _ from 'lodash';

interface FancyListProps {
  data: Record<string, unknown>[];
}

function FancyList({ data }: FancyListProps) {
  const items = createChildren(data);

  return (
    <ul className="fancy-list">
      {items.map((item, index) => (
        <li key={`item-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function createChildren(data: Record<string, unknown>[]) {
  // takes an array of objects and returns an array of jsx components
  return _.map(data, (obj, objIndex) => {
    const children: JSX.Element[] = [];
    _.forOwn(obj, function (value, key) {
      if (value) {
        children.push(
          <div key={`${objIndex}-${key}`}>{`${key}: ${value}`}</div>
        );
      }
    });
    return children;
  });
}

export default FancyList;
