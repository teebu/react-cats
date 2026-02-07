import React, {useEffect, useState} from 'react';
import '../App.css';
import ProgressiveImage from "react-progressive-graceful-image";
import ImageHolder from "../helpers/ImageHolder";
import {Link} from "react-router-dom";

function CatDetail({match}) {

  const [catData, setCatData] = useState({url: null});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCatData = async () => {
      // setIsLoading(true);
      const res = await fetch(`https://api.thecatapi.com/v1/images/${match.params.id}`);
      // const res = await fetch("http://aws.random.cat/meow");
      const res_json = await res.json();
      // setIsLoading(false)
      console.log(res_json);
      console.log('catdetails');
      setCatData(res_json);
    };

    fetchCatData();
    console.log('fetchCatData');
  }, [match]);




  let imgStyle = {maxWidth: '600px', maxHeight: '600px'};

  return (
    <div>
      <h1>Cat Details</h1>
      <img src={catData.url} style={imgStyle} alt=''/>
      <div>{catData.url}</div>
    </div>
  )
}

export default CatDetail;
