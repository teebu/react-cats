import React, {useEffect, useState} from 'react';
import '../App.css';
import FancyList from "../helpers/FancyList";
import _ from "lodash";

function Breeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const cleanUpData = (data) => _.map(data, e => _.pick(e, ['breed', 'country', 'pattern']))


  const fetchBreeds = async () => {
    /*[{
      breed: "Abyssinian",
      country: "Ethiopia",
      origin: "Natural/Standard",
      coat: "Short",
      pattern: "Ticked"
    },]*/
    const res = await fetch("https://catfact.ninja/breeds?limit=30");
    const res_json = await res.json();
    setBreeds(res_json.data);
    // console.log(res_json)
  };

  return (
    <div>
      <h1>Cat Breeds</h1>
      <FancyList data={cleanUpData(breeds)}/>
    </div>
  );
}


export default Breeds;
