import React from 'react';
import SideNav from './components/SideNav';
import Body from './components/Body';
import ContentArea from './components/ContentArea';
import BoatLoader from './components/BoatLoader';


const DRAWER_WIDTH = '0';
const CONTENT_WIDTH = '1208px';


export default class Route__App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Body>
        <SideNav isMobile={this.props.isMobile} isSideNavOpen={this.props.isSideNavOpen} />

        <ContentArea drawerWidth={DRAWER_WIDTH} contentWidth={CONTENT_WIDTH}>
          <h1>App Home</h1>
        </ContentArea>
      </Body>
    )
  }
};
