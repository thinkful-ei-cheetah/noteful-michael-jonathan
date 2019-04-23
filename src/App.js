import React, {Component} from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import Store from './store';

export default class App extends Component {
  state = {
    store: Store
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>
        <div className='main-content'>
          <Sidebar />
          < Notes notes={this.state.store.notes}/>
        </div>
      </div>
    );
  }
  
}
