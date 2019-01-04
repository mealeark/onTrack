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
                <a className='nav-link' href='#'>
                {this.props.links[0]}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                {this.props.links[1]}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                {this.props.links[2]}
                </a>
              </li>
            </ul>
          }
          {this.props.username && 
            <div className='btn-group'>
              <button 
                type='button'
                className='btn btn-secondary btn-lg dropdown-toggle'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span>
                  <i className='fas fa-user-circle'></i>
                </span>
              </button>
              <div className='dropdown-menu dropdown-menu-left'>
                <button className='dropdown-item' type='button'>Logout</button>
              </div>
            </div>
          }
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;