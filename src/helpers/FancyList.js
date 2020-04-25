import React, {useEffect, useState} from 'react';
import '../App.css';
import _ from 'lodash';

function FancyList(props) {
  // console.log(props);
  const data = createChildren(props.data)
  // console.log(data);

  return (
    <ul className="fancy-list">
      {data.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function createChildren(data) {
  // takes an array of objects and returns an array of jsx components
  return _.map(data, obj => {
    const children = [];
    _.forOwn(obj, function (value, key) {
      if (value) children.push(<div>{`${key}: ${value}`}</div>)
    });
    return children;
  });
}

export default FancyList;
