import React from 'react';
import { Route, Link } from 'react-router-dom';
import SideNav from './components/SideNav';
import Body from './components/Body';
import ContentArea from './components/ContentArea';
import DrawerArea from './components/DrawerArea';
import BreadCrumb from './components/BreadCrumb';
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

          <div className="SubHeader">
            MY-AWS-ACCOUNT
          </div>
          
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>mobile? {this.props.isMobile.toString()}</h1>
          <h1>functions</h1>
          <Link to={`${this.props.match.url}/functionName`}>a function</Link>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
          <h1>functions</h1>
        </ContentArea>

        <DrawerArea drawerWidth={DRAWER_WIDTH}>
          <Route path={`${this.props.match.url}/:sectionName`} render={(props) => <Route__Applications__App__Functions__Function {...props} drawerWidth={DRAWER_WIDTH} />} />
        </DrawerArea>
      </Body>
    )
  }
};
