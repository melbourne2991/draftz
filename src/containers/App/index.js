import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Notes from '../Notes';
import NoteEditor from '../NoteEditor';
import NewNote from '../NewNote';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/note/new">New</Link>

        <Route exact path="/" component={Notes}/>

        <Switch>
          <Route exact path="/note/new" component={NewNote}/>
          <Route exact path="/note/:noteId" component={NoteEditor}/>
        </Switch>
      </div>
    );
  }
}
