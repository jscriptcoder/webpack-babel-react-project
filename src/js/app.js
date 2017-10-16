import React, { Component } from 'react';
import { render } from 'react-dom';

import '../scss/app.scss';

export default function Hello () {
  return (
    <div>
      Hello from React
    </div>
  );
}

render(<Hello />, document.getElementById('app'));
