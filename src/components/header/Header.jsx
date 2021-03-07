import React from 'react';
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss'

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link to='/' className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to='/shop' className="option">
          SHOP
        </Link>
        <Link to='/contact' className="option">
          CONTACT
        </Link>
        { currentUser ?
          <div onClick={() => auth.signOut()} className="option">
              SING OUT   
          </div> :
          <Link to="/signin" className="option">SIGN IN</Link> }
      </div>
    </div>
  );
}

export default Header;
