import React from 'react';
import cssComponent from './StatusBubble.module.css';
import cssVariables from './_variables.module.css';
let styles = {};
Object.assign(styles, cssComponent, cssVariables);


const StatusBubble = ({ level, icon, hoverText, qty }) => {
  return (
    <div className={`${styles.StatusBubble} `}>
      <span className={`${styles.icon} ${styles[level]}`}>
        <i className={`icon-${icon}`}/>
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