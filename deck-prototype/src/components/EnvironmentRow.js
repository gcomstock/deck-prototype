import React, { useState } from 'react';
import styles from './EnvironmentRow.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function EnvironmentRow({ name, currentUrl, envType = 'test', ...props }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const envRowClasses = classNames({
    [styles.row]: true,
    [styles.rowProd]: envType === 'prod'
  });

  const envLabelClasses = classNames({
    [styles.envLabel]: true,
    [styles[envType]]: envType
  });

  return (
    <div className={styles.EnvironmentRow}>

      <div className={envRowClasses}>
        <Link className={styles.clickableArea} to={`${currentUrl}/envDetail`}>
          <span className={envLabelClasses}>{name}</span>
        </Link>
        <div className={styles.expand} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed &&
          <i className="ico icon-expand"/>
          }
          {!isCollapsed &&
          <i className="ico icon-collapse"/>
          }
        </div>
        <div className={styles.select}>
          <i className={`ico icon-checkbox-unchecked`}/>
        </div>
      </div>

      {!isCollapsed &&
        <div style={{margin: '16px 0 40px 8px'}}>
          {props.children}
        </div>
      }
    </div>
  )
};
