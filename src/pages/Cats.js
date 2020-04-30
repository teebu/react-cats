import React, {useEffect, useState} from 'react';
import '../App.css';
import ProgressiveImage from "react-progressive-graceful-image";
import ImageHolder from "../helpers/ImageHolder";
import {Link} from "react-router-dom";
import FancyList from "../helpers/FancyList";

function Cats({size = 5}) {

  const [catsData, setCatsData] = useState([{url: null}]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCatData = async () => {
      const headers = {'x-api-key': '61ca5f8e-9e7a-4469-a560-d88fe48a9eb6'};
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${size}&order=random&size=small`, {headers});
      const res_json = await res.json();
      setCatsData(res_json);
      console.log(res_json);
    };

    fetchCatData();
    console.log('fetchCatData')
  }, [size]);

  return (
    <ul className="fancy-img-list shadowlink">
      {
        catsData.map((cat, i) => (
          <li style={{borderRadius: '120px'}}>
            <Link to={`/cat/${cat.id}`}>
              <ImageHolder width={cat.width} height={cat.height}
                           maxWidth={200} maxHeight={200}
                           style={{borderRadius: '90px'}}
                           delay={100}
                           src={cat.url} alt="cat"/>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Cats;
