import React from 'react';
import Icon from './Icon';
import styles from './StatusBubble.module.css';


const StatusBubble = ({ level, icon, hoverText, qty, size = '24' }) => {
  console.log(level);

  return (
    <div className={`${styles.StatusBubble} `}>
      <span className={`${styles.icon} ${styles[level]}`}>
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