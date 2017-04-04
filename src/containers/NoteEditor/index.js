import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TestActions } from '../../actions'
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
import Editor from '../../components/Editor';
import styles from './styles.scss';

class Ui extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    const { actions, test } = this.props

    return (
      <div>
        <div className={styles.editorContainer}>
          <Editor className={styles.editor}/>
        </div>
      </div>
    )
  }
}

//        <button onClick={() => actions.increment()}>Increment</button>
//        <button onClick={() => actions.decrement()}>Deccrement</button>

//        <div>{ test.count }</div>

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TestActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ui)