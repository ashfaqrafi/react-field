import React, { Component } from 'react';
import toastr from 'toastr';
import MainView from './MainView.jsx';
import GridView from './GridView.jsx';
import TableView from './TableView.jsx';

class Main extends Component {


  render() {
    return (
      <div>
        <MainView/>
      </div>
    );
  }
}

export default Main;
