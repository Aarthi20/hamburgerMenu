// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="trigger-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      className="popup-container"
    >
      {close => (
        <div className="popup-content">
          <ul className="close-container">
            <div className="home-container">
              <AiFillHome className="home-icon" />
              <Link to="/">
                <li className="link-item">Home</li>
              </Link>
            </div>
            <div className="about-container">
              <BsInfoCircleFill className="about-icon" />
              <Link to="/about">
                <li className="link-item">About</li>
              </Link>
            </div>
          </ul>
          <div>
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
