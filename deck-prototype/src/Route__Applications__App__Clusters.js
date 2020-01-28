import React from 'react';
import { Route, Link } from 'react-router-dom';
import ContentArea from './components/ContentArea';
import BreadCrumb from './components/BreadCrumb';
import Filters from './components/Filters';
import { ObjectRow } from './components/ObjectRow';
import Button from './components/Button';


import styles from './clusters.module.css';

import Route__Applications__App__Functions__Function from './Route__Applications__App__Functions__Function';

import { mockInfra } from './mockdata/infra';


const DRAWER_WIDTH = '480px';
const CONTENT_WIDTH = '880px';


export default class Route__App__Clusters extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFilters = this.toggleFilters.bind(this);

    this.state = {
      selectedOptions: {},
      isFiltersOpen: true
    };
  }

  toggleFilters() {
    this.setState({isFiltersOpen: !this.state.isFiltersOpen});
  }

  render() {
    return (
      <>
        <div className={styles.scrollOffHeader}>
          <BreadCrumb path="Clusters"/>
          <Button text="Create Server Group" icon="search"/>
        </div>


        <div className={styles.ObjectRowHeader}>
          <Button icon="search" theme="clear" clickHandler={this.toggleFilters}/>
        </div>


        <div className={styles.bod}>
          <Filters isOpen={this.state.isFiltersOpen}/>

          <div className={styles.rows} style={{flex: `0 1 ${CONTENT_WIDTH}`}}>
            <ObjectRow
              mockData={mockInfra}
              currentUrl={this.props.match.url}
            />
          </div>
        </div>


        {/* Drawer Routes */}
        <Route path={`${this.props.match.url}/appDetail`}
          render={(props) => <Route__Applications__App__Functions__Function {...props}
            icon="app-window-sm"
            drawerWidth={400}
          />}
        />

      {/*
        <Route path={`${this.props.match.url}/serverGroupDetail`}
          render={(props) => <Route__Applications__App__Functions__Function {...props}
          drawerWidth={800} />}
        />
      */}

      </>
    )
  }
};
