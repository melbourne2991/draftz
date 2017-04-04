import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Notes from '../Notes';
import NoteEditor from '../NoteEditor';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        App!
        <Route exact path="/" component={Notes}/>
        <Route path="/note/:noteId" component={NoteEditor}/>
      </div>
    );
  }
}