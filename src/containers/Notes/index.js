import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Notes!
        <Link to="/note/1">
          Go to note!
        </Link>
      </div>
    );
  }
}