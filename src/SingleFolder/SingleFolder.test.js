import React from 'react';
import ReactDOM from 'react-dom';
import SingleFolder from './SingleFolder';

describe('SingleFolder Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< SingleFolder />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
