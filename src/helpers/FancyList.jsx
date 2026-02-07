import React from 'react';
import '../App.css';
import _ from 'lodash';

function FancyList(props) {
  const data = createChildren(props.data);

  return (
    <ul className="fancy-list">
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function createChildren(data) {
  // takes an array of objects and returns an array of jsx components
  return _.map(data, obj => {
    const children = [];
    _.forOwn(obj, function (value, key) {
      if (value) children.push(<div>{`${key}: ${value}`}</div>);
    });
    return children;
  });
}

export default FancyList;
