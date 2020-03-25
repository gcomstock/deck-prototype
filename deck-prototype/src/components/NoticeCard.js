import React from 'react';
import classNames from 'classnames';
import { renderStatusBubbles } from '../helperMethods';
import styles from './NoticeCard.module.css';


export default function NoticeCard({ title, text, icon, level = 'inactive', isUpcoming, isException }) {
  const NoticeCardClasses = classNames({
    [styles.NoticeCard]: true,
    [styles.isUpcoming]: isUpcoming,
    [styles.isException]: isException
  });
  const IconContainerClasses = classNames({
    [styles.iconContainer]: true
  });
  const statuses = [{
    icon: icon,
    level: level,
    size: 'medium'
  }];

  return (
    <div className={NoticeCardClasses}>
      {icon &&
      <div className={IconContainerClasses}>
        {renderStatusBubbles(statuses)}
      </div>
      }
      {title &&
      <div className={styles.title}>
        {title}
      </div>
      }
      {text &&
      <div className={styles.text}>
        {text}
      </div>
      }
    </div>
  )
};
