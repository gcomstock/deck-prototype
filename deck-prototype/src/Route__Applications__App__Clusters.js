import React from 'react';
import { Route, Link } from 'react-router-dom';
import _ from 'lodash';
import ContentArea from './components/ContentArea';
import BreadCrumb from './components/BreadCrumb';
import Filters from './components/Filters';
import { ObjectRow } from './components/ObjectRow';
import Button from './components/Button';
import Drawer from './components/Drawer';
import styles from './clusters.module.css';


import { ACTIVE_QUERY, ROUTES } from './mockdata/consts';
import { clustersSingle } from './mockdata/clustersSingle';
import { clustersMulti } from './mockdata/clustersMulti';


const CONTENT_WIDTH = '880px';



export default class Route__App__Clusters extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFilters = this.toggleFilters.bind(this);
    this.getPropsForDrawer = this.getPropsForDrawer.bind(this);
    this.resetMockData = this.resetMockData.bind(this);

    this.state = {
      isFiltersOpen: true,
      activeObjectRowKey: '',
      selectedOptions: {},
      mockData: this.getMockData(this.props.activeQuery, this.props.route),
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


  getPropsForDrawer(e) {
    let activeObjectRowKey = e.target.dataset.mockdatakey;

    // copy mock data so we can mutate it and then set new state
    let newMockData = _.cloneDeep(this.state.mockData);

    // clear last active ObjectRow
    let lastClicked = _.get(newMockData, this.state.activeObjectRowKey);
    if (lastClicked) {
      lastClicked.isActive = false;
    }

    // show new active ObjectRow
    let clicked = _.get(newMockData, activeObjectRowKey);
    clicked.isActive = true;

    this.setState(prevState => ({
      activeObjectRowKey: activeObjectRowKey,
      mockData: newMockData,
      drawer: {
        ...prevState.drawer,
        icon: clicked.icon,
        title: clicked.title,
        subTitle: clicked.subTitle,
        type: clicked.type,
        statuses: clicked.statuses
      }
    }));
  }


  // clear mutated state and get a fresh copy of the mock data
  resetMockData() {
    this.setState({ mockData: _.cloneDeep(this.getMockData(this.props.activeQuery, this.props.route)) });
  }

  getMockData(activeQuery, route) {
    if (route === ROUTES.CLUSTERS && activeQuery === ACTIVE_QUERY.NO_APP)
      return clustersSingle;
    if (route === ROUTES.CLUSTERS && activeQuery === ACTIVE_QUERY.SINGLE_APP)
      return clustersSingle;
    if (route === ROUTES.CLUSTERS && activeQuery === ACTIVE_QUERY.MULTI_APP)
      return clustersMulti;
    if (route === ROUTES.TEMPLATING && activeQuery === ACTIVE_QUERY.NO_APP)
      return clustersSingle;
    if (route === ROUTES.TEMPLATING && activeQuery === ACTIVE_QUERY.SINGLE_APP)
      return clustersSingle;
    if (route === ROUTES.TEMPLATING && activeQuery === ACTIVE_QUERY.MULTI_APP)
      return clustersMulti;
  }


  componentWillReceiveProps (newProps) {
    if ( newProps.activeQuery !== this.props.activeQuery ) {
      this.resetMockData();
    }
  }


  render() {
    const d = this.state.drawer;

    return (
      <>
        <div className={styles.scrollOffHeader}>
          <BreadCrumb path={this.props.route}/>
          <Button text="Create Server Group" icon="search"/>
        </div>


        <div className={styles.ObjectRowHeader}>
          <div className={styles.filterContent}>
            <Button icon="search" theme="clear" clickHandler={this.toggleFilters}/>
          </div>
          <div className={styles.selectionContent}>
            <Button icon="collapse-all" theme="clear" clickHandler={this.toggleFilters}/>
            <Button icon="collapse-all" theme="clear" clickHandler={this.toggleFilters}/>
          </div>
        </div>


        <div className={styles.bod}>
          <Filters isOpen={this.state.isFiltersOpen}/>

          <div className={styles.rows} style={{flex: `0 1 ${CONTENT_WIDTH}`}}>
            <ObjectRow
              mockData={this.state.mockData}
              currentUrl={this.props.match.url}
              getPropsForDrawer={this.getPropsForDrawer}
            />
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
              resetMockData={this.resetMockData}
            >
            <h1>content</h1>
            </Drawer>
          }
        />
      </>
    )
  }
};
