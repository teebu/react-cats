import React, {useEffect, useState} from 'react';
import '../App.css';


function FancyList(props) {
  // console.log(props);
  const data = joinJson(props.data)
  // console.log(data);

  return (
    <ul className="fancy-list">
      {data.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function joinJson(obj) {
  return (obj.map(e => createChildren(e)))
}

function createChildren(obj) {
  const children = []
  for (let [key, value] of Object.entries(obj)) {
    if (key !== 'length' && value) { // we don't want the length key. it's useless
      children.push(<>{`${key}: ${value}`}<br/></>)
    }
  }
  return children;
}

export default FancyList;
