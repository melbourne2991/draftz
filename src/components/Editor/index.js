import React, { Component } from 'react';
import classnames from 'classnames';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './styles.scss';
import { getSelection, getSelectionRect } from './utils/selection';
import Toolbar from './Toolbar';

export default class CustomerEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleEditorState: EditorState.createEmpty(),
      editorState: EditorState.createEmpty(),
      toolbarOpen: false,
      selectionRect: null
    };

    this.titleEditorOnChange = (titleEditorState) => this.setState({ titleEditorState });
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render() {
    const { editorState, titleEditorState } = this.state;
    const { className } = this.props;

    return (
      <div className={classnames(styles.editor, className)}>
        <div className={styles.titleEditor}>
          <Editor
            editorState={titleEditorState}
            onChange={this.titleEditorOnChange}
            placeholder="Title"/>
        </div>
        <Toolbar {...getToolbarProps(editorState)}/>
        <Editor 
          placeholder="Write here..."
          editorState={editorState}
          onChange={this.onChange}/>
      </div>
    );
  }
}

function getToolbarProps(editorState) {
  const selectionState = editorState.getSelection();

  const toolbarProps = {
    open: false,
    position: {}
  };

  if(!selectionState.isCollapsed()) {
    const nativeSelection = getSelection(window);
    const selectionRect = getSelectionRect(nativeSelection);

    // sometimes selection rect has no rangecount
    // even though there is collapse, was getting an error, see:
    // http://stackoverflow.com/questions/22935320/uncaught-indexsizeerror-failed-to-execute-getrangeat-on-selection-0-is-not
    if (selectionRect) {
      const { left, right, top, bottom } = selectionRect;

      toolbarProps.position.left = left + ((right - left) / 2);
      toolbarProps.position.top = top;
      toolbarProps.open = true;
    }
  }

  return toolbarProps;
}
