import React, { Component } from 'react';

class NewNote extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchNewNote();
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return state.notes
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NoteActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
