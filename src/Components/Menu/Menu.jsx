import React from 'react'
import '../Menu/Menu.scss'
import { Link } from 'react-router-dom'
import {menu} from '../../Data/Data'

const Menu = () => {
  return (
    <div className='menu'>

      {
        menu.map(item =>(
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>

              {
                item.listItems.map(listItem=>(
                  <Link to={listItem.url} className='listItem' key={listItem.id}>
                    <img src={listItem.icon} alt="icon" className='icon'/>
                    <span className="link">{listItem.title}</span>
                  </Link>
                ))
              }

        </div>
        ))
      }

    </div>
  )
}

export default Menu