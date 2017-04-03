import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';
import Icon from '../../Icon';

const numberOfIcons = 3;
const iconWidth = 30;
const iconHeight = 30;
const arrowSize = 5;
const width = iconWidth * numberOfIcons;
const height = iconHeight;

const iconInline = {
  width: `${iconWidth}px`,
  height: `${iconHeight}px`
};

const arrowInline = {
  borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`
};

const contentInline = {
  width: `${width}px`,
  height: `${height}px`
};

function ToolbarIcon({ name, onToggle }) {
  return (
    <div className={styles.icon} onMouseDown={onToggle}>
      <Icon name={name} fixedWidth={true}/>
    </div>
  )
}

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, position, className, toggleInlineStyle } = this.props;

    const toolbarStyles = classnames({
      [styles.open]: open
    }, styles.toolbar, className);

    const offsetPosition = {};

    if (position.left && position.top) {
      offsetPosition.top = position.top - (height + arrowSize);
      offsetPosition.left = position.left - (width / 2)
    }

    return (
      <div className={toolbarStyles} style={offsetPosition}>
        <div className={styles.content} style={contentInline}>
          <ToolbarIcon name="bold" onToggle={() => toggleInlineStyle('BOLD')}/>
          <ToolbarIcon name="italic" onToggle={() => toggleInlineStyle('ITALIC')}/>
          <ToolbarIcon name="align-center"/>
        </div>
        <div className={styles.arrow} style={arrowInline}></div>
      </div>
    );
  }
}

// export default function Toolbar({ open, position, className, toggleInlineStyle }) {

// }