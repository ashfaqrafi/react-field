import React, { Component } from 'react';
import toastr from 'toastr';
import Sidebar from './SideBar.jsx';
import Main from './MainContent.jsx';

class HomeComponent extends Component {
  componentDidMount() {
    toastr.info('React Challenge');
  }

  render() {
    return (
          <div className="row marpadzero full-bg">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 marpadzero fn-sidebar-bg">
              <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 marpadzero fn-main-bg">
              <Main/>
            </div>
          </div>
    );
  }
}

export default HomeComponent;
