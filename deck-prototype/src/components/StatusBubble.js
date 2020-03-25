import React from 'react';
import Icon from '../assets/Icon.js';
import styles from './StatusBubble.module.css';


const StatusBubble = ({ level, icon, hoverText, qty, size = 'medium' }) => {
  const paddingFromSize = {
    xSmall: '4px',
    small: '8px',
    medium: '8px',
    large: '8px',
    xLarge: '12px'
  }

  return (
    <div className={`${styles.StatusBubble}`}>
      <span className={`${styles.icon} ${styles[level]}`} style={{padding: paddingFromSize[size]}}>
        <Icon name={icon} fill="white" size={size} />
      </span>
      {qty &&
      <span className={`${styles.qty} ${styles[level]}`}>
        {qty}
      </span>
      }
    </div>
  )
};

export default StatusBubble;