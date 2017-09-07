import React, { Component } from 'react';
import { Link } from 'react-router';

class NavbarComponent extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top fn-navbg mbzero'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>
              <img src='/images/fn-logo.png' width='150px' alt='react-challenge' />
            </Link>
          </div>
          <ul className='nav navbar-nav'>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
