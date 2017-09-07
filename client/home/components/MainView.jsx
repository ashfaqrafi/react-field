import React, { Component } from 'react';
import toastr from 'toastr';
import TableView from './TableView.jsx';
import GridView from './GridView.jsx';

class MainView extends Component {

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  constructor(props){
    super(props)
    this.state = {
      isTableView: false
    }
  }

  changeView(buttonType) {
    console.log(buttonType)
    if((this.state.isTableView && buttonType === 'grid') || (!this.state.isTableView && buttonType === 'table')) {
      this.setState({
        isTableView: !this.state.isTableView
      })
    }
  }

  render() {
    return (
      <div className="m1">
        <div className="fn-dib fn-wohead">
          Work Orders
        </div>
        <div className="flr">
          <div className="btn-group" role="group" aria-label="">

            <button type="button" className="btn btn-default" onClick={this.changeView.bind(this,'table')} data-toggle="tooltip" data-placement="bottom" title="Click to view Table">
              <i className="fa fa-table" aria-hidden="true"></i>
            </button>
            <button type="button" className="btn btn-default" onClick={this.changeView.bind(this,'grid')} data-toggle="tooltip" data-placement="bottom" title="Click to view Card">
              <i className="fa fa-th" aria-hidden="true"></i>
            </button>

          </div>
        </div>
        {this.state.isTableView ? <TableView/> : <GridView/>}
      </div>
    );
  }
}

export default MainView;
