import React from 'react';
import { Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Body from './components/Body';
import ContentArea from './components/ContentArea';
import DrawerArea from './components/DrawerArea';
import BreadCrumb from './components/BreadCrumb';
import RuledSubHeader from './components/RuledSubHeader';
import FunctionRow from './components/FunctionRow';

import TableHeader from './components/TableHeader';

import Route__Applications__App__Functions__Function from './Route__Applications__App__Functions__Function';


// we define the drawer width here instead of each drawer route, so we can create a layout that gives room for the right drawer size on large screens.
const DRAWER_WIDTH = '480px';
const CONTENT_WIDTH = '1208px';


export default class Route__App__Functions extends React.Component {
  constructor(props) {
    super(props);
    props.setIsAppPath(true);
  }

  render() {
    return (
      <Body>

        <SideNav isMobile={this.props.isMobile} isSideNavOpen={this.props.isSideNavOpen} isAppPath={this.props.isAppPath} />


        <ContentArea drawerWidth={DRAWER_WIDTH} contentWidth={CONTENT_WIDTH}>
          <BreadCrumb path="Functions"/>


          <div style={{position: 'relative'}}>

            <TableHeader
              columns={['','Alias','Exceptions','Invokes']}
              layout="Functions"
              top="48px"
              leftSpacer="80px"
            />

            <RuledSubHeader text="MY-AWS-ACCOUNT" />


            <FunctionRow  {...this.props} />
            <FunctionRow  {...this.props} />
            <FunctionRow  {...this.props} />
            <FunctionRow  {...this.props} />

          </div>


        </ContentArea>


        <DrawerArea drawerWidth={DRAWER_WIDTH}>
          <Route path={`${this.props.match.url}/:sectionName`} render={(props) => <Route__Applications__App__Functions__Function {...props} drawerWidth={DRAWER_WIDTH} />} />
        </DrawerArea>
      </Body>
    )
  }
};
