import React from 'react';
import { Route, Link } from 'react-router-dom';
import SideNav from './components/SideNav';
import Body from './components/Body';
import ContentArea from './components/ContentArea';
import DrawerArea from './components/DrawerArea';
import Drawer from './components/Drawer';
import BreadCrumb from './components/BreadCrumb';
import { ObjectRow } from './components/ObjectRow';

import { mockInfra } from './mockdata/infra';


const DRAWER_WIDTH = '0';
const CONTENT_WIDTH = '1200px';


export default class Route__App__Clusters extends React.Component {
  constructor(props) {
    super(props);
    props.setIsAppPath(true);

    this.state = {
      selectedOptions: {}
    };
  }


  render() {
    return (
      <Body>
        <SideNav isMobile={this.props.isMobile} isSideNavOpen={this.props.isSideNavOpen} isAppPath={this.props.isAppPath} />

        <ContentArea drawerWidth={DRAWER_WIDTH} contentWidth={CONTENT_WIDTH}>
          <BreadCrumb path="Clusters"/>

          <ObjectRow
            mockInfra={mockInfra}
            currentUrl={this.props.match.url}
          />
        </ContentArea>

        <DrawerArea drawerWidth={DRAWER_WIDTH}>
          <Route path={`${this.props.match.url}/:sectionName`} render={(props) => <Drawer {...props} drawerWidth={DRAWER_WIDTH} />} />
        </DrawerArea>
      </Body>
    )
  }
};
