import React, {useEffect, useState} from 'react';
import '../App.css';
import ProgressiveImage from "react-progressive-graceful-image";
import ImageHolder from "../helpers/ImageHolder";
import {Link} from "react-router-dom";

function Cat({maxWidth = 200, maxHeight = 200, borderRadius = '90px', delay = 100}) {

  useEffect(() => {
    fetchCatData();
    console.log('fetchCatData')
  }, []);

  const [catData, setCatData] = useState([{url: null}]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatData = async () => {
    // setIsLoading(true);
    const headers = {'x-api-key': '61ca5f8e-9e7a-4469-a560-d88fe48a9eb6'};
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&order=random&size=medium&", {headers});
    // const res = await fetch("http://aws.random.cat/meow");
    const res_json = await res.json();
    setCatData(res_json);
    // setIsLoading(false)
    console.log(res_json);
    console.log('cats')
  };

  let imgStyle = {
    width: Fit(catData[0].width || maxWidth, catData[0].height, maxWidth, maxHeight).width,
    height: Fit(catData[0].width || maxWidth, catData[0].height, maxWidth, maxHeight).height,
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    borderRadius: borderRadius
  }

  return (
    <div>
      <Link to={`/cat/${catData[0].id}`} className='shadowlink'>
        <ImageHolder style={{width: catData[0].width, height: catData[0].height, ...imgStyle}}
                     delay={delay}
                     src={catData[0].url} alt='cat'/>
      </Link>
    </div>
  )
}

function Fit(srcWidth, srcHeight, maxWidth, maxHeight) {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return {width: srcWidth * ratio, height: srcHeight * ratio};
}

export default Cat;
