import React from 'react';
import ReactDOM from 'react-dom';
import {TabGroup, TabItem} from './index';

it('renders TabGroup without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TabItem without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TabItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
