import React, {Component} from 'react';
import './Folders.css';
import { NavLink } from 'react-router-dom';

export default class Folders extends Component {
  render() {
    console.log(this.props);
    const folders = this.props.folders.map(folder => {
      return (
        <li key={folder.id}>
          < NavLink to={`/folders/${folder.id}`}>{folder.name}</NavLink>
        </li>
      )
    })
    return (
      <ul>
        {folders}
      </ul>
    )
  }
}
