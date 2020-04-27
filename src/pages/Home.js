import Cat from "../helpers/Cat";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Interval from 'react-interval-rerender'
import IntervalRenderer from 'react-interval-renderer';

const Home = () => {

  // reload every x seconds
  const [time, setTime] = useState(Date.now());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(Date.now())
  //   }, 5000)
  //
  //   console.log('interval created')
  //   return () => { //unset the interval timer on unloading of this component
  //     console.log('interval cleared')
  //     clearInterval(interval);
  //   };
  //
  // }, []);

  /* // Using react-interval-rerender
    <Interval delay={10000}>
      {() => <Cat key={Date.now()} maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>}
    </Interval>
  */

  const ChildComponent1 = () => (
    <div>
      react-interval-rerender: {new Date().toLocaleTimeString()}
      <Cat key={Date.now()} maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>
    </div>
  );

  const IntervalRerenderComponent = () => (
    <Interval delay={3000} children={ChildComponent1}>
    </Interval>
  )

  const IntervalRerenderComponent2 = () => (
    <Interval delay={3000}>
      {() => (<ChildComponent1/>)}
    </Interval>
  )

  const IntervalRerenderComponent3 = () => (
    <Interval delay={3000}>
      {() => <Cat key={Date.now()} maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>}
    </Interval>
  )

  const IntervalRerenderComponent4 = () => (
    <Interval delay={15000}>
      {() => (
        <>
          <div>Meow!</div>
          <Cat key={Date.now()} maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>
        </>
      )}
    </Interval>
  )


  const ChildComponent2 = () => (
    <div key={Date.now()}>
      <Cat maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500}/>
      <div>Bottom text</div>
      <div>react-interval-render: {new Date().toLocaleTimeString()}</div>
    </div>
  );

  const IntervalRendererComponent = () => (
    <IntervalRenderer interval={5000}
                      shouldComponentRerender={() => true}
                      componentDidRerender={() => (console.log('componentDidRerender'))}
    >
      <ChildComponent2/>
    </IntervalRenderer>
  )


  return (
    <div>
      <h1>React Cats</h1>
      <IntervalRerenderComponent4/>
    </div>
  )
}


export default Home;
