import React, {Component} from 'react';
import './App.css';
import Folders from './Folders/Folders';
import SingleFolder from './SingleFolder/SingleFolder';
import Notes from './Notes/Notes';
import Store from './store';
import { Route, Link } from 'react-router-dom';
import Note from './Note/Note';


export default class App extends Component {
  state = {
    store: Store,
    folders: Store.folders,
    notes: Store.notes
  }


  grabFolderFromNoteId (id) {
    const {notes, folders} = this.state.store
    const foundNote = notes.find(note => id === note.id)
    return folders.find(folder => folder.id === foundNote.folderId)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>
        <div className='main-content'>
            <Route path='/' exact render={(routerProps) =>
              <Folders {...routerProps} folders={this.state.store.folders}/>
              }
            />
            <Route path='/notes/:id' render={(routerProps) =>
                  <SingleFolder routerProps={routerProps}
                  folder={ this.grabFolderFromNoteId(routerProps.match.params.id)}
                  />
                } 
            />

            <Route exact
              path='/'
              render={(routerProps) =>
                < Notes routerProps={routerProps}
                  notes={this.state.store.notes}
                />
              }
            />

            <Route
              path='/notes/:id'
              render={(routerProps) =>
                < Note {...this.state.store.notes.find(note => note.id === routerProps.match.params.id)} />
              }
            />
        </div>
      </div>
    );
  }
  
}
