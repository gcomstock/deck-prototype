import React from 'react';
import styles from './SearchBar.module.css';
import { ACTIVE_QUERY } from '../mockdata/consts';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.cycleActiveQuery = this.cycleActiveQuery.bind(this);
  }

  cycleActiveQuery() {
    if (this.props.activeQuery === ACTIVE_QUERY.NO_APP) {
      this.props.setActiveQuery(ACTIVE_QUERY.SINGLE_APP);
    }
    if (this.props.activeQuery === ACTIVE_QUERY.SINGLE_APP) {
      this.props.setActiveQuery(ACTIVE_QUERY.MULTI_APP)
    }
    if (this.props.activeQuery === ACTIVE_QUERY.MULTI_APP) {
      this.props.setActiveQuery(ACTIVE_QUERY.NO_APP)
    }
  }

  renderActiveQuery() {
    if (this.props.activeQuery === '') {
      return (
        'Search Spinnaker, jump to recents'
      )
    }
    if (this.props.activeQuery === 'singleApp') {
      return (
        <div className={styles.searchPill}>
          <div className={styles.searchPillKey}>
            Application
          </div>
          <div className={styles.searchPillVal}>
            orca
          </div>
        </div>
      )
    }
    if (this.props.activeQuery === 'multiApp') {
      return (
        <div className={styles.searchPill}>
          <div className={styles.searchPillKey}>
            Application
          </div>
          <div className={styles.searchPillVal}>
            orca, echo, gate
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={styles.SearchBar} onClick={this.cycleActiveQuery}>
        <i className={`${styles.searchIcon} ico icon-search`}/>
        {this.renderActiveQuery()}
      </div>
    )
  }
}