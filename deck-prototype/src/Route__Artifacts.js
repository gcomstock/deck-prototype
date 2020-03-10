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
import NoticeCard from './components/NoticeCard';
import ArtifactRow from './components/ArtifactRow';

import styles from './Artifacts.module.css';

import { ACTIVE_QUERY, ROUTES } from './mockdata/consts';
import { prodClusters } from './mockdata/artifactLifecycle';


const CONTENT_WIDTH = 1200;



export default class Route__GenericRowRoute extends React.Component {
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
        <h1>artifact data</h1>
      )
    }

    return (
      <>
        <ColumnHeader text="Environments" icon="search"/>

        <NoticeCard icon="search" title="1 artifact is deployed in 3 environments with no issues detected." isActive={true} noticeType={'ok'}/>
        <h3>PRODUCTION</h3>
        <ObjectRow
          mockData={prodClusters}
          currentUrl={this.props.match.url}
        />

        <h3>STAGING</h3>
          <ObjectRow
          mockData={prodClusters}
          currentUrl={this.props.match.url}
        />

        <h3>TEST</h3>
          <ObjectRow
          mockData={prodClusters}
          currentUrl={this.props.match.url}
        />
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


        <div style={{maxWidth: totalContentWidth, display: 'flex'}}>
          <Filters isOpen={this.state.isFiltersOpen}/>
          <div className={styles.mainContent} style={{flex: `0 1 ${totalContentWidth}`}}>


            <div className={styles.artifactsColumn}>
              <ColumnHeader text="Artifacts" icon="search"/>


              {/*version, name, sha, phases, statuses */}
              <ArtifactRow
                clickHandler={this.toggleArtifactDetail}
                currentUrl={this.props.match.url}
                version="#123"
                name="Artifact Name Artifact Name Artifact Name Artifact Name Artifact Name"
                sha="a1b2c3"
                statuses={[
                  {
                    icon: 'app-window',
                    level: 'error'
                  },
                  {
                    icon: 'app-window',
                    level: 'error'
                  }
                ]}
                stages={[
                  {
                    level: 'ok'
                  },
                  {
                    level: 'ok'
                  },
                  {
                    level: 'ok'
                  }
                ]}
              />
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
