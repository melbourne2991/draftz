import React from 'react';
import classnames from 'classnames';

export default function Icon({ name, size, fixedWidth }) {
  const iconStyles = classnames('fa', `fa-${name}`, {
    [`fa-${size}`]: !!size,
    ['fa-fw']: fixedWidth
  });

  return (
    <div className={iconStyles}></div>
  )
}