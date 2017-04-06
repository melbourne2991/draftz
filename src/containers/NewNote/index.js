import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { NoteActions } from '../../actions';

class NewNote extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchNewNote();
  }

  render() {
    return <div>New note!</div>
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NoteActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
