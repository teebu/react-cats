import React from 'react';
import Cat from '../helpers/Cat';

function About() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <Cat />
      </div>
      <div className="intro">
        A simple project to play around with React, React Routes and CSS.
      </div>
    </div>
  );
}

export default About;
