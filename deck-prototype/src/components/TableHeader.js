import React from 'react';
import classNames from 'classnames';
import styles from './TableHeader.module.css';


export default class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isMobile) {
      return null;
    }
    return (
      <div className={styles.header}>
        <div>
          Where
        </div>
        <div>
          What
        </div>
        <div>
          When
        </div>
        <div className={styles.collapseAll}>
          <i className="ico icon-arrow-toggle-all"></i>
        </div>
      </div>
    )
  };
}