import React from 'react';
import cn from 'classnames';

class NavBar extends React.Component {

  render () {
    return (
      <div>
        <nav 
          className={cn('navbar navbar-expand-lg navbar-light bg-light', 'navBar')}
        >
          <a className='navbar-brand' href='/'>
            <img
              src={require('../../../../public/images/onTrackLogo.png')}
              alt='logo'
              className='logo'
            />
          </a>
          <button 
            className='navbar-toggler'
            type='button' 
            data-toggle='collapse' 
            data-target='#navbarTogglerDemo02' 
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          {this.props.links && 
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#'></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'></a>
              </li>
            </ul>
          }
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;