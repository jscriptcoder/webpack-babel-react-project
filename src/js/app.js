import React, { Component } from 'react';
import { render } from 'react-dom';

import '../scss/app.scss';
import mlPng from '../assets/ml.png';

export default function Hello () {
  return (
    <div className="machine-learning">
      <h1>Hello Machine Learning</h1>
      <img src={mlPng} alt="Machine Learning" />
    </div>
  );
}

render(<Hello />, document.getElementById('app'));
