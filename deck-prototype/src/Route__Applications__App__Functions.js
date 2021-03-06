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
import Sticky from './components/Sticky';

import Route__Applications__App__Functions__Function from './Route__Applications__App__Functions__Function';


import styles from './components/_variables.module.css';


// we define the drawer width here instead of each drawer route, so we can create a layout that gives room for the right drawer size on large screens.
const DRAWER_WIDTH = '480px';
const CONTENT_WIDTH = '1208px';


const stubbedColumns = [
  {
    title: ''
  },
  {
    title: 'Alias'
  },
  {
    title: 'Invokes'
  },
  {
    title: ''
  }
];


export default class Route__App__Functions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Body>

        <SideNav isMobile={this.props.isMobile} isSideNavOpen={this.props.isSideNavOpen} />


        <ContentArea drawerWidth={DRAWER_WIDTH} contentWidth={CONTENT_WIDTH}>
          <BreadCrumb path="Functions"/>


          <TableHeader
            isMobile={this.props.isMobile}
            columns={stubbedColumns}
            layout="Functions"
            top="48px"
          />

          <div style={{position: 'relative'}}>
            <RuledSubHeader
              text="MY-AWS-ACCOUNT"
              top="96px"
              mobileTop="48px"
              isSticky={true}
              isMobile={this.props.isMobile}
              backgroundColor={styles.colorBg}
              canToggle={true}
            >
              <FunctionRow {...this.props} />
              <FunctionRow {...this.props} />
              <FunctionRow {...this.props} />
              <FunctionRow {...this.props} />
            </RuledSubHeader>
          </div>

          <div style={{position: 'relative'}}>
            <RuledSubHeader
              text="MY-AWS-ACCOUNT"
              top="96px"
              mobileTop="48px"
              isSticky={true}
              isMobile={this.props.isMobile}
              backgroundColor={styles.colorBg}
              canToggle={true}
            >
              <FunctionRow {...this.props} />
              <FunctionRow {...this.props} />
              <FunctionRow {...this.props} />
              <FunctionRow {...this.props} />
            </RuledSubHeader>
          </div>



        </ContentArea>


        <DrawerArea drawerWidth={DRAWER_WIDTH}>
          <Route path={`${this.props.match.url}/:sectionName`} render={(props) => <Route__Applications__App__Functions__Function {...props} drawerWidth={DRAWER_WIDTH} />} />
        </DrawerArea>
      </Body>
    )
  }
};
