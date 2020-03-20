import React from 'react';
import styles from './ArtifactRow.module.css';
import Pill from './Pill';
import { renderStatusBubbles } from '../helperMethods';

export default function ArtifactRow({ mockData = null, clickHandler }) {

  return (
    <>
      {mockData.map((row, index) => (
      <div className={styles.ArtifactRow} onClick={clickHandler}>
        <div className={styles.content}>
          <div className={styles.version}>
            <Pill text={row.version}/>
          </div>
          <div className={styles.text}>
            <div className={styles.sha}>{row.sha}</div>
            <div className={styles.name}>{row.name}</div>
          </div>
          {row.statuses.length > 0 &&
            <div className={styles.statuses}>
              {renderStatusBubbles(row.statuses)}
            </div>
          }
        </div>
        <div className={styles.stages}>
          {row.stages.map((stage) => (
            <span className={styles.stage}/>
          ))}
        </div>
      </div>
      ))}
    </>
  )
};
