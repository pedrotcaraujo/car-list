import React from 'react';
import ReactDOM from 'react-dom';
import CarList from './index';

it('renders CarList vendors without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarList showAll={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CarList showAll without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarList showAll={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
