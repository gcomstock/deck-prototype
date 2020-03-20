import React from 'react';
import { Route, Link } from 'react-router-dom';
import _ from 'lodash';
import ContentArea from './components/ContentArea';
import BreadCrumb from './components/BreadCrumb';
import Filters from './components/Filters';
import { ObjectRow } from './components/ObjectRow';
import Button from './components/Button';
import Drawer from './components/Drawer';
import ColumnHeader from './components/ColumnHeader';
import ArtifactDetailHeader from './components/ArtifactDetailHeader';
import NoticeCard from './components/NoticeCard';
import ArtifactRow from './components/ArtifactRow';
import EnvironmentRow from './components/EnvironmentRow';
import KeyVal from './components/KeyVal';

import styles from './Artifacts.module.css';

import { ACTIVE_QUERY, ROUTES } from './mockdata/consts';
import { prodClusters, stagingClusters, testClusters, artifactColumn } from './mockdata/artifactLifecycle';


const CONTENT_WIDTH = 1200;



export default class Route__Artifacts extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFilters = this.toggleFilters.bind(this);
    this.toggleArtifactDetail = this.toggleArtifactDetail.bind(this);

    this.state = {
      isArtifactDetailsOpen: false,
      isFiltersOpen: true,

      drawer: {
        icon: '',
        drawerWidth: 480,
        title: 'default title',
        subTitle: 'default subtitle'
      }
    };
  }

  toggleFilters() {
    this.setState({isFiltersOpen: !this.state.isFiltersOpen});
  }

  toggleArtifactDetail() {
    this.setState({isArtifactDetailsOpen: !this.state.isArtifactDetailsOpen});
  }





  renderEnvironmentsColumn() {

    if (this.state.isArtifactDetailsOpen) {
      return (
        <>
          <ArtifactDetailHeader name="Artifact Name" version="#124" clickHandler={this.toggleArtifactDetail}/>

          <div className={styles.artifactDetail}>
            <div className={styles.headerTable}>
              <div className={styles.headerTableLeft}>
                This artifact is running in 9/9 possible clusters
              </div>
              <div className={styles.headerTableRight}>
                <KeyVal keyName="Author" val="emunson" valLink="#"/>
                <KeyVal keyName="On" val="Jan 2, 2020 20:34"/>
                <KeyVal keyName="Change type" val="Release Candidate" valLink="#"/>
                <KeyVal keyName="Commit" val="a1b2c3" valLink="#"/>
              </div>
            </div>

            <EnvironmentRow name="production" currentUrl={this.props.match.url} envType="prod">
              <NoticeCard icon="check_badge" title="1 artifact is deployed in 3 environments with no issues detected." level="good"/>

              <ObjectRow
                mockData={prodClusters}
                currentUrl={this.props.match.url}
                bgColor={"#ffffff"}
              />
            </EnvironmentRow>

            <EnvironmentRow name="staging" currentUrl={this.props.match.url}>
              <NoticeCard icon="manual_judgement" title="Manual judgement will be required before promotion to PRODUCTION" level="inactive" isUpcoming={true}/>
              <NoticeCard icon="canary_fail" title="Canary failed (67/100) on Mar 3 23:23:59. Run time: 12 hours" level="error" isException={true}/>
              <NoticeCard icon="canary_running" title="Canary is running. Run time: 8 hours" level="info"/>
              <NoticeCard icon="deploy" title="Deployed to PRESTAGING on Mar 3 23:23:59" level="good"/>

              <ObjectRow
                mockData={stagingClusters}
                currentUrl={this.props.match.url}
                bgColor={"#ffffff"}
              />
            </EnvironmentRow>

            <EnvironmentRow name="test" currentUrl={this.props.match.url}>
              <NoticeCard icon="build" title="Continuous Integration Successful. Run time: 20 mins" level="good"/>

              <ObjectRow
                mockData={testClusters}
                currentUrl={this.props.match.url}
                bgColor={"#ffffff"}
              />
            </EnvironmentRow>
          </div>
        </>
      )
    }

    return (
      <>
        <ColumnHeader text="Environments" icon="environment"/>

        <NoticeCard icon="check_badge" title="1 artifact is deployed in 3 environments with no issues detected." level="good"/>

        <EnvironmentRow name="production" currentUrl={this.props.match.url} envType="prod">
          <ObjectRow
            mockData={prodClusters}
            currentUrl={this.props.match.url}
          />
        </EnvironmentRow>

        <EnvironmentRow name="staging" currentUrl={this.props.match.url}>
          <ObjectRow
            mockData={stagingClusters}
            currentUrl={this.props.match.url}
          />
        </EnvironmentRow>

        <EnvironmentRow name="test" currentUrl={this.props.match.url}>
          <ObjectRow
            mockData={testClusters}
            currentUrl={this.props.match.url}
          />
        </EnvironmentRow>
      </>
    )
  }


  render() {
    const d = this.state.drawer;
    const totalContentWidth = this.state.isFiltersOpen ? CONTENT_WIDTH + 248 + 'px' : CONTENT_WIDTH + 'px';

    return (
      <>
        <div className={styles.scrollOffHeader}>
          <BreadCrumb path={this.props.route}/>
          {/* <Button text="Create Server Group" icon="add-another"/> */}
        </div>


        <div className={styles.ObjectRowHeader}>
          <div style={{flex: `0 1 ${totalContentWidth}`, display: 'flex', justifyContent: 'space-between'}}>
            <div className={styles.filterContent}>
              <Button icon="filter" theme="clear" clickHandler={this.toggleFilters}/>
            </div>
            <div className={styles.selectionContent}>
              <Button icon="expand-all" theme="clear" clickHandler={this.toggleFilters}/>
              <Button icon="checkbox-unchecked" theme="clear" clickHandler={this.toggleFilters}/>
            </div>
          </div>
        </div>


        <div style={{ display: 'flex'}}>
          <Filters isOpen={this.state.isFiltersOpen}/>
          <div className={styles.mainContent} style={{flex: `0 1 ${totalContentWidth}`}}>
            <div className={styles.artifactsColumn}>
              <ColumnHeader text="Artifacts" icon="artifact"/>

              <ArtifactRow mockData={artifactColumn} clickHandler={this.toggleArtifactDetail}/>
            </div>

            <div className={styles.environmentsColumn}>
              {this.renderEnvironmentsColumn()}
            </div>
          </div>
        </div>


        {/* Drawer Routes */}
        <Route
          path={`${this.props.match.url}/:rowUrl`}
          render={(props) =>
            <Drawer {...props}
              icon={d.icon}
              drawerWidth={d.drawerWidth}
              title={d.title}
              subTitle={d.subTitle}
            >
            <h1>content</h1>
            </Drawer>
          }
        />
      </>
    )
  }
};
