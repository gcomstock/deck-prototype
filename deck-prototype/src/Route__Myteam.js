import React from 'react';
import Body from './components/Body';
import SideNav from './components/SideNav';
import ContentArea from './components/ContentArea';


const DRAWER_WIDTH = '0';
const CONTENT_WIDTH = '1200px';


export default class Route__Myteam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Body>
        <SideNav isMobile={this.props.isMobile} isSideNavOpen={this.props.isSideNavOpen} />

        <ContentArea drawerWidth={DRAWER_WIDTH} contentWidth={CONTENT_WIDTH}>
          <h1>my team</h1>
        </ContentArea>
      </Body>
    )
  }
};
