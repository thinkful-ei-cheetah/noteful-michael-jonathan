import React, {Component} from 'react';
import './Note.css';

// props
// id, name, modified, folderId, content

export default class Note extends Component {
  render() {
    return (
      <li className='note'>
        <h2>{this.props.name}</h2>
        <p>Last edited: {this.props.modified}</p>
        <p className='content'>{this.props.content}</p>
      </li>
    )
  }
}
