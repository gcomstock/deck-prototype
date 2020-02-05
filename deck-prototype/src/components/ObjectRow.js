import React from 'react';
import { Link } from 'react-router-dom';
import StatusBubble from './StatusBubble';
import classNames from 'classnames';

import cssComponent from './ObjectRow.module.css';
import cssVariables from './_variables.module.css';
let styles = {};
Object.assign(styles, cssComponent, cssVariables);


export const ObjectRow = ({ mockDataKey = '', mockData, currentUrl, getPropsForDrawer, depth = 0 }) => {

  return (
    <>
      {mockData.map((row, index) => (
        <div>
          <Link
            className={buildRowClasses(row)}
            to={`${currentUrl}/${row.url}`}
            style={getStylesFromDepth(depth)}
            data-mockdatakey={buildMockDataKey(mockDataKey, index)}
            onClick={getPropsForDrawer}
          >
            <div className={styles.leftCol}>
              <i className={`ico icon-${row.icon}`}/>
              <span className={styles.rowTitle}>{row.title}</span>
            </div>
            <div className={styles.centerCol}>
              {renderStatusBubbles(row.statuses)}
            </div>
            <div className={styles.rightCol}>
              
            </div>
          </Link>

          {/* Recursively render children */}
          {(row.children.length > 0) &&
          <ObjectRow
            mockData={row.children}
            currentUrl={currentUrl}
            getPropsForDrawer={getPropsForDrawer}
            depth={depth + 1}
            mockDataKey={buildMockDataKey(mockDataKey, index) + '.children'}
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

const renderStatusBubbles = (statuses) => {
  return (
    <>
    {statuses.map((status) => (
      <StatusBubble
        level={status.level}
        icon={status.icon}
        hoverText={status.hoverText}
        fullText={status.fullText}
        qty={status.qty}
      />
    ))}
    </>
  )
};

const buildMockDataKey = (oldMockDataKey, index) => {
  return `${oldMockDataKey}[${index}]`;
};

const buildRowClasses = (row) => {
  return classNames(styles.ObjectRow, {
    [styles.active]: row.isActive
  });
};




//TODO

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