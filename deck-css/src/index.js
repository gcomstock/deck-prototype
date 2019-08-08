import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import Route__Root from './Route__Root';
import Route__Myteam from './Route__Myteam';
import Route__Applications__App from './Route__Applications__App';
import Route__Applications__App__Clusters from './Route__Applications__App__Clusters';
import Route__Applications__App__Functions from './Route__Applications__App__Functions';
import Header from './components/Header';
import 'source-sans-pro/source-sans-pro.css';

// inherited styles from existing deck
//import './deck-oss_CSS.css';
//import './deck-nflx_CSS.css';

// new global styles
import './assets/icomoon/style.css';
import './style.css';

const BREAKPOINT_MOBILE = 1024;


export class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.setIsAppPath = this.setIsAppPath.bind(this);

    this.state = {
      isMobile: false,
      isSideNavOpen: true,
      isAppPath: false
    };

    window.onresize = (e) => {
      this.handleResize(e);
    };
  }

  handleResize(e) {
    if (e.target.innerWidth <= BREAKPOINT_MOBILE && this.state.isMobile === false) {
      this.setState({isMobile: true});
      this.setState({isSideNavOpen: false});
    }
    if (e.target.innerWidth > BREAKPOINT_MOBILE && this.state.isMobile === true) {
      this.setState({isMobile: false});
    }
  }

  toggleSideNav() {
    this.setState({isSideNavOpen: !this.state.isSideNavOpen});
  }

  setIsAppPath(bool) {
    this.setState({isAppPath: bool});
  }

  componentDidMount() {
    window.dispatchEvent(new Event('resize'));

    // on page load, we have the side nav open on web, closed on mobile
    if ( window.innerWidth <= BREAKPOINT_MOBILE) {
      this.setState({isSideNavOpen: false});
    }
  }

  render() {
    return (
      <Router basename='/'>
        <div>
          <Header
            isSideNavOpen={this.state.isSideNavOpen}
            isMobile={this.state.isMobile}
            isAppPath={this.state.isAppPath}
            toggleSideNav={this.toggleSideNav}
          />

          <Route
            path='/teams/myteam'
            render={(props) => <Route__Myteam {...props}
              isSideNavOpen={this.state.isSideNavOpen}
              isMobile={this.state.isMobile}
              isAppPath={this.state.isAppPath}
              setIsAppPath={this.setIsAppPath}
            />}
          />

          <Route
            exact path='/applications/app/'
            render={(props) => <Route__Applications__App {...props}
              isSideNavOpen={this.state.isSideNavOpen}
              isMobile={this.state.isMobile}
              isAppPath={this.state.isAppPath}
              setIsAppPath={this.setIsAppPath}
            />}
          />

          <Route
            exact path='/'
            render={(props) => <Route__Root {...props}
              isSideNavOpen={this.state.isSideNavOpen}
              isMobile={this.state.isMobile}
              isAppPath={this.state.isAppPath}
              setIsAppPath={this.setIsAppPath}
            />}
          />

          <Route
            path='/applications/app/clusters'
            render={(props) => <Route__Applications__App__Clusters {...props}
              isSideNavOpen={this.state.isSideNavOpen}
              isMobile={this.state.isMobile}
              isAppPath={this.state.isAppPath}
              setIsAppPath={this.setIsAppPath}
            />}
          />

          <Route
            path='/applications/app/functions'
            render={(props) => <Route__Applications__App__Functions {...props}
              isSideNavOpen={this.state.isSideNavOpen}
              isMobile={this.state.isMobile}
              isAppPath={this.state.isAppPath}
              setIsAppPath={this.setIsAppPath}
            />}
          />
        </div>
      </Router>
    );
  }
}

render(<App/>,  document.getElementById('root'));
