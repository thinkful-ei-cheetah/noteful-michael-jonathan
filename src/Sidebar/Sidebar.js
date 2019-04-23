import React, {Component} from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <nav role='navigation'>
        <ul>
          <li>Important</li>
          <li>Spangley</li>
          <li>Super</li>
        </ul>
      </nav>
    )
  }
}
