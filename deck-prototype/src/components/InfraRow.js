import React from 'react';
import { Link } from 'react-router-dom';
import Sticky from './Sticky';
import classNames from 'classnames';
import StatusBubble from './StatusBubble';

import cssComponent from './InfraRow.module.css';
import cssVariables from './_variables.module.css';
let styles = {};
Object.assign(styles, cssComponent, cssVariables);


export const OptionsList = ({ mockInfra, currentUrl }) => {
  return (
    <>
      {mockInfra.map(row => (
        <ul className={styles.indent}>
          <Link className={styles.InfraRow} to={`${currentUrl}/${row.url}`}>

            <div className={styles.leftCol}>
              <i className={`ico icon-${row.icon}`}/>
              {row.title}
            </div>
            <div className={styles.centerCol}>

              <StatusBubble
                level="info"
                icon="md"
                hoverText="oh snap"
                qty="123"
              />
              <StatusBubble
                level="error"
                icon="servergroup-aws"
                hoverText="ruh roh"
              />
            </div>
            <div className={styles.rightCol}>
              carrot
            </div>

          </Link>

          {/* Recursively render children */}
          {(row.children.length > 0) &&
          <OptionsList
            mockInfra={row.children}
            currentUrl={currentUrl}
          />
          }
        </ul>
      ))}
    </>
  )
};









const Checkbox = ({ selected, label, onChange }) => {
  return (
    <div>
      <div
        className="checkbox"
        onClick={() => onChange(!selected)}
      />
      <div className="label">{label}</div>
    </div>
  )
};