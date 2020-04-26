import Cat from "../helpers/Cat";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
// import Interval from 'react-interval-rerender'

const Home = () => {

  // reload every x seconds
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 5000)

    console.log('interval created')
    return () => { //unset the interval timer on unloading of this component
      console.log('interval cleared')
      clearInterval(interval);
    };

  }, []);

/* // Using react-interval-rerender
  <Interval delay={10000}>
    {() => <Cat key={Date.now()} maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>}
  </Interval>
*/

  return (
    <div>
      <h1>React Cats</h1>
      <Cat key={time} maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>
    </div>
  )
}


export default Home;
