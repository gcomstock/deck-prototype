import React from 'react';
import styles from './ArtifactRow.module.css';
import Pill from './Pill';
import { renderStatusBubbles } from '../helperMethods';

export default function ArtifactRow({ currentUrl, clickHandler, version, name, sha, stages, statuses }) {

  return (
    <div className={styles.ArtifactRow} onClick={clickHandler}>
      <div className={styles.content}>
        <div className={styles.version}>
          <Pill text={version}/>
        </div>
        <div className={styles.text}>
          <div className={styles.sha}>{sha}</div>
          <div className={styles.name}>{name}</div>
        </div>
        {statuses &&
          <div className={styles.statuses}>
            {renderStatusBubbles(statuses)}
          </div>
        }
      </div>
      <div className={styles.stages}>
        {stages.map((stage) => (
          <span className={styles.stage}/>
        ))}
      </div>
    </div>
  )
};