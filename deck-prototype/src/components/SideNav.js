import React from 'react';
import TopLevelNav from './TopLevelNav';
import SideNavLink from './SideNavLink';
import styles from './SideNav.module.css';


export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAppNav() {
    return (
      <>
        <div className={styles.appTitleBox}>
          <div className={styles.appIcon}>
            <i className="ico icon-app-window"/>
          </div>
          <div className={styles.appTitle}>application name</div>
        </div>

        <div className={styles.tinyTitle}>Delivery</div>
        <SideNavLink name="Environments" to="#"/>
        <SideNavLink name="Pipelines" to="#" count="1"/>
        <SideNavLink name="Canary Configs" to="#"/>
        <SideNavLink name="Canary Reports" to="#" count="992"/>

        <div className={styles.tinyTitle}>Infrastructure</div>
        <SideNavLink name="Clusters" to="/applications/app/clusters"/>
        <SideNavLink name="Load Balancers" to="#"/>
        <SideNavLink name="Security Groups" to="#"/>
        <SideNavLink name="Properties" to="#"/>
        <SideNavLink name="Functions" to="/applications/app/functions" count="7"/>

        <div className={styles.tinyTitle}>Admin</div>
        <SideNavLink name="Tasks" to="#"/>
        <SideNavLink name="Config" to="#"/>
        <SideNavLink name="Analytics" to="#"/>
        <SideNavLink name="Permissions" to="#"/>
        <SideNavLink name="View Team" to="#"/>
        <SideNavLink name="Page Team" to="#"/>
      </>
    )
  }

  render() {
    if (!this.props.isSideNavOpen || !this.props.isAppPath && !this.props.isMobile) {
      return <div/>
    }

    return (
      <div className={styles.SideNav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            { this.props.isMobile && <TopLevelNav/> }
            { this.props.isAppPath && this.renderAppNav() }
          </div>
          <div className={styles.scrollFader}/>
        </div>
      </div>
    )
  }
}


