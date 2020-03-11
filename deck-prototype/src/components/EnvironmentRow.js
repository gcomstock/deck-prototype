import React, { useState } from 'react';
import styles from './EnvironmentRow.module.css';


//export default class EnvironmentRow extends React.Component {
//  constructor(props) {
//    super(props);
//  }
//
//  render() {
//    return (
//      <div className={styles.EnvironmentRow}>
//        {this.props.children}
//      </div>
//    )
//  }
//}

export default function EnvironmentRow({ name, ...props }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.EnvironmentRow} onClick={() => setIsCollapsed(!isCollapsed)}>
      {!isCollapsed &&
        this.props.children
      }
    </div>
  )
};