import React from 'react';
import TopLevelNav from './TopLevelNav';
import SideNavLink from './SideNavLink';
import styles from './SideNav.module.css';

import { ACTIVE_QUERY } from '../mockdata/consts';
import { navNoApp, navSingleApp, navMultiApp } from '../mockdata/navs';
import navDelivery from '../assets/svg/navDelivery.svg';
import navHealth from '../assets/svg/navHealth.svg';
import navSettings from '../assets/svg/navSettings.svg';
import navResources from '../assets/svg/navResources.svg';

const icons = {
  navDelivery,
  navHealth,
  navSettings,
  navResources
};

const mockActiveQueryNavs = new Map([
  [ACTIVE_QUERY.NO_APP, navNoApp],
  [ACTIVE_QUERY.SINGLE_APP, navSingleApp],
  [ACTIVE_QUERY.MULTI_APP, navMultiApp]
]);


export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNav() {
    const activeNav = mockActiveQueryNavs.get(this.props.activeQuery);

    return (
      <>
      {activeNav.map((group, i) => (
        <>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderIcon}>
            <img src={icons[group.headerIcon]} width="32"/>
          </div>
          <div className={styles.sectionHeaderName}>
            {group.headerName}
          </div>
        </div>
        <div>
          {group.children.map((link, index) => (
            <SideNavLink name={link.name} to={link.to} key={link.name} count={link.count}/>
          ))}
        </div>
        </>
      ))}
      </>
    )
  }

  render() {
    if (!this.props.isOpen) {
      return null
    }

    return (
      <div className={styles.SideNav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            { this.renderNav() }
          </div>
          {/* <div className={styles.scrollFader}/> */}
        </div>
      </div>
    )
  }
}
