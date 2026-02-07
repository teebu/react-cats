import Cat from '../helpers/Cat';
import React from 'react';
import Interval from 'react-interval-rerender';

const Home = () => {
  const ChildComponent1 = () => (
    <div>
      react-interval-rerender: {new Date().toLocaleTimeString()}
      <Cat
        key={Date.now()}
        maxHeight={600}
        maxWidth={600}
        borderRadius={'12px'}
        delay={500}
      />
    </div>
  );

  const IntervalRerenderComponent = () => (
    <Interval delay={3000} children={ChildComponent1}></Interval>
  );

  const IntervalRerenderComponent2 = () => (
    <Interval delay={3000}>{() => <ChildComponent1 />}</Interval>
  );

  const IntervalRerenderComponent3 = () => (
    <Interval delay={3000}>
      {() => (
        <Cat
          key={Date.now()}
          maxHeight={600}
          maxWidth={600}
          borderRadius={'12px'}
          delay={500}
        />
      )}
    </Interval>
  );

  const IntervalRerenderComponent4 = () => (
    <Interval delay={15000}>
      {() => (
        <>
          <div>Meow!</div>
          <Cat
            key={Date.now()}
            maxHeight={600}
            maxWidth={600}
            borderRadius={'12px'}
            delay={500}
          />
        </>
      )}
    </Interval>
  );

  const ChildComponent2 = () => (
    <div key={Date.now()}>
      <Cat maxHeight={600} maxWidth={600} borderRadius={'12px'} delay={500} />
      <div>Bottom text</div>
      <div>react-interval-render: {new Date().toLocaleTimeString()}</div>
    </div>
  );

  return (
    <div>
      <h1>React Cats Global!</h1>
      <IntervalRerenderComponent4 />
    </div>
  );
};

export default Home;
