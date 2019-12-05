import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Itinerary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
