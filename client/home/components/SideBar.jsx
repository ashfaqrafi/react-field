import React, { Component } from 'react';
import toastr from 'toastr';
import ReactDOM from 'react-dom';

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

class Sidebar extends Component {

  constructor(props) {
        super(props);
        this.state = { visible: false };

        this.state = {
          userName: "John Doe"
        };
    }

  setUsername(){
      console.log( ReactDOM.findDOMNode(this.refs.username).value);
      this.setState({
        userName: ReactDOM.findDOMNode(this.refs.username).value
      });
      this.hide()
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

  componentDidMount() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className='fn-side'>
        <div className="fn-side-imgarea ml2 mb1 fll">
          <div className="fn-side-img fn-dib">
            <img src='//s3.amazonaws.com/dev.fieldnation/profile_image/547-57755b1ba7795.png' width='150px' alt='profile_image' />
          </div>
          <div className="fn-dib">
            <p className="fn-person-name">{this.state.userName}</p>
            <p className="fn-number">547</p>
          </div>
        </div>
        <div className="fn-side-edit flr">
          <button type="button" onClick={this.show.bind(this)} className="btn btn-default fn-edit-bttn" data-container="body" data-toggle="popover" data-placement="right" data-content="Click to edit name" data-trigger="hover">Edit</button>
        </div>

        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} closeMaskOnClick={false}>
          <div>
            <p className="fn-editname">Edit Name</p>
            <div>
              <div className="auth-form-group">
                  <label htmlFor="email" className="fn-name">Name</label>
                  <input type="text" ref="username" className="form-control auth-input wid50" id="username" />
              </div>
              <div className="flr ptb3">
                <button type="button"  onClick={this.hide.bind(this)} className="btn btn-default fn-edit-bttn mr2">Cancel</button>
                <button type="button" onClick={this.setUsername.bind(this)} className="btn btn-default fn-edit-bttn fn-save-bttn" data-toggle="tooltip" data-placement="bottom" title="Click to save name">Save</button>
              </div>
            </div>
          </div>
        </Rodal>

      </div>
    );
  }
}

export default Sidebar;
