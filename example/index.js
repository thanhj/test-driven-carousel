// example/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../src/Carousel';
import slides from './slides';

const container = document.createElement('div');
document.body.appendChild(container);
const autoAdvanceDelay = 5e3;
ReactDOM.render(
  <Carousel slides={slides} autoAdvanceDelay={autoAdvanceDelay} />,
  container
);
