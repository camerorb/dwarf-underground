import React, { Component } from 'react'
import './Header.css'
import HeaderLogo from './HeaderLogo.js'
import HeaderNav from './HeaderNav.js'
import HeaderText from './HeaderText.js'
class Header extends Component {
  render() {
    return (
      <div className="expanded row header">
        <div className="clearfix">
          <HeaderLogo />
          <HeaderNav />
        </div>
       <HeaderText />
      </div>
    )
  }
}

export default Header