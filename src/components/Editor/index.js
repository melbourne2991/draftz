import React, { Component } from 'react';
import classnames from 'classnames';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import 'draft-js/dist/Draft.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import styles from './styles.scss';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

console.log(inlineToolbarPlugin);

export default class CustomerEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleEditorState: createEditorStateWithText(''),
      editorState: createEditorStateWithText(''),
    };

    this.titleEditorOnChange = (titleEditorState) => this.setState({ titleEditorState });
    this.onChange = (editorState) => this.setState({ editorState });
  }

  focusTitleEditor() {
    this.titleEditor.focus();
  }

  focusMainEditor() {
    this.mainEditor.focus();
  }

  render() {
    const { editorState, titleEditorState } = this.state;
    const { className } = this.props;

    return (
      <div className={classnames(styles.editor, className)}>
        <div className={styles.titleEditor} onClick={this.focusTitleEditor.bind(this)}>
          <Editor
            ref={(element) => this.titleEditor = element}
            editorState={titleEditorState}
            onChange={this.titleEditorOnChange}
            placeholder="Title"/>
        </div>
        <div className={styles.mainEditor} onClick={this.focusMainEditor.bind(this)}>
          <Editor
            ref={(element) => this.mainEditor = element}
            plugins={[inlineToolbarPlugin]}
            placeholder="Write here..."
            editorState={editorState}
            onChange={this.onChange}/>
        </div>
        <InlineToolbar/>          
      </div>
    );
  }
}
