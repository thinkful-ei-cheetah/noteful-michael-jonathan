import React, {Component} from 'react';
import './App.css';
import Folders from './Folders/Folders';
import SingleFolder from './SingleFolder/SingleFolder';
import Notes from './Notes/Notes';
import Store from './store';
import { Route, Link } from 'react-router-dom'


export default class App extends Component {
  state = {
    store: Store
  }


  grabFolderFromNoteId (id)
  {
    console.log(id)
    const foundNote = this.state.store.notes.find((note)=>id===note.id)
    return this.state.store.folders.find((folder)=>folder.id === foundNote.folderId)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>
        <div className='main-content'>

            <Route path='/' component={Folders} exact/>
            <Route path='/notes/:id' render={(routerProps) =>
                  <SingleFolder routerProps={routerProps}
                  folder={ this.grabFolderFromNoteId(routerProps.match.params.id)}
                  />
                } 
            />

            <Route exact
                path='/'
                render={(routerProps) =>
                  <Notes routerProps={routerProps}
                  notes={this.state.store.notes}
                  />
                }
              />
        </div>
      </div>
    );
  }
  
}
