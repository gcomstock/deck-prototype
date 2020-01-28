import React from 'react';
import { Link } from 'react-router-dom';
import StatusBubble from './StatusBubble';

import cssComponent from './ObjectRow.module.css';
import cssVariables from './_variables.module.css';
let styles = {};
Object.assign(styles, cssComponent, cssVariables);


export const ObjectRow = ({ mockData, currentUrl, depth = 0 }) => {
  return (
    <>
      {mockData.map(row => (
        <div>
          <Link className={styles.ObjectRow} to={`${currentUrl}/${row.url}`} style={getStylesFromDepth(depth)}>

            <div className={styles.leftCol} style={getMarginFromDepth(depth)}>
              <i className={`ico icon-${row.icon}`}/>
              <span className={styles.rowTitle}>{row.title}</span>
            </div>
            <div className={styles.centerCol}>

              <StatusBubble
                level="info"
                icon="md"
                hoverText="oh snap"
                qty="823"
              />
              <StatusBubble
                level="error"
                icon="servergroup-aws"
                hoverText="ruh roh"
              />
            </div>
            <div className={styles.rightCol}>
              
            </div>

          </Link>

          {/* Recursively render children */}
          {(row.children.length > 0) &&
          <ObjectRow
            mockData={row.children}
            currentUrl={currentUrl}
            depth={depth + 1}
          />
          }
        </div>
      ))}
    </>
  )
};


const getStylesFromDepth = (depth) => {
  return {
    marginLeft: 16*depth,
    position: 'sticky',
    top: 104 + 40*depth,
    zIndex: 500-depth
  }
};

const getMarginFromDepth = (depth) => {
  return {
    //marginLeft: 16*depth
  }
};


//z index, depth fix


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