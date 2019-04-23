import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './Notes';

describe('Notes Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Notes />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
