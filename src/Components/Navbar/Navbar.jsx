import React from 'react'
import '../Navbar/Navbar.scss'
import Logo from '../../Assets/Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faExpand, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import grid from '../../Assets/Images/icons8-thumbnail-50.png'
import avatar from '../../Assets/Images/IMG_1534 2.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <p className="logoText">Paks <span>Everything</span></p>
        </div>
      </Link>
      <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass}  className='icon'/>
          <img src={grid} alt="thumbnail" className='thumbnail' />
          <FontAwesomeIcon icon={faExpand}  className='icon'/>
          <div className="notification">
            <FontAwesomeIcon icon={faBell}  className='icon'/>
            <span className="item">1</span>
          </div>
          <div className="user">
            <img src={avatar} alt="avatar" className="avatar" />
            <span className="userName">Paks</span>
          </div>
          <FontAwesomeIcon icon={faGear}  className='icon'/>
      </div>

    </div>
  )
}

export default Navbar