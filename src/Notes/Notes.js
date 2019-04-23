import React, {Component} from 'react';
import './Notes.css';
import Note from '../Note/Note';

export default class Notes extends Component {
  render() {
    const notes = this.props.notes.map(note => {
      return < Note {...note} key={note.id} />
    })

    return (
      <main role='main'>
        <ul className='notes'>
          {notes}
        </ul>
      </main>
    )
  }
}
