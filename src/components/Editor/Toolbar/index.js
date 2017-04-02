import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';
import Icon from '../../Icon';


const numberOfIcons = 3;
const iconWidth = 30;
const iconHeight = 30;
const arrowSize = 10;
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

function ToolbarIcon(props) {
  return (
    <div className={styles.icon}>
      <Icon {...props} fixedWidth={true}/>
    </div>
  )
}

export default function Toolbar({ open, position, className }) {
  const toolbarStyles = classnames({
    [styles.open]: open
  }, styles.toolbar, className);

  const offsetPosition = {};

  console.log(position.top, height, arrowSize);

  if (position.left && position.top) {
    offsetPosition.top = position.top - (height + arrowSize);
    offsetPosition.left = position.left - (width / 2)
  }

  return (
    <div className={toolbarStyles} style={offsetPosition}>
      <div className={styles.content} style={contentInline}>
        <ToolbarIcon name="bold"/>
        <ToolbarIcon name="italic"/>
        <ToolbarIcon name="align-center"/>
      </div>
      <div className={styles.arrow} style={arrowInline}></div>
    </div>
  )
}