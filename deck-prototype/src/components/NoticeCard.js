import React from 'react';
import classNames from 'classnames';
import { renderStatusBubbles } from '../helperMethods';
import styles from './NoticeCard.module.css';
import Button from './Button.js';


export default function NoticeCard({ title, text, icon, level = 'inactive', isUpcoming, isException }) {
  const NoticeCardClasses = classNames({
    [styles.NoticeCard]: true,
    [styles.isUpcoming]: isUpcoming,
    [styles[level]]: true
  });
  const statuses = [{
    icon: icon,
    level: level,
    size: 'medium'
  }];

  return (
    <div className={NoticeCardClasses}>
      <div className={styles.message}>
        {icon &&
        <div className={styles.iconContainer}>
          {renderStatusBubbles(statuses)}
        </div>
        }
        <div className={styles.textContainer}>
          {title &&
          <div style={{fontWeight: 'bold'}}>
            {title}
          </div>
          }
          {text &&
          <div>
            {text}
          </div>
          }
        </div>
      </div>
      <div className={styles.buttons}>
        <Button text="Reject" theme="clear"/>
        <Button text="Approve" theme="clear"/>
      </div>
    </div>
  )
};
