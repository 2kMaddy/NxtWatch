import {Link} from 'react-router-dom'
import VideoAppContext from '../../context/VideoAppContext'
import {NavItem, NavIcon, TabName} from './styledComponent'
import './index.css'

const NavListItems = prop => (
  <VideoAppContext.Consumer>
    {value => {
      const {isDark, changeTab} = value
      const {icon, id, text, path, alterActiveTab} = prop
      const isActive = id === alterActiveTab
      return (
        <Link to={path} className="nav-link">
          <NavItem
            theme={isDark}
            isActive={isActive}
            onClick={() => changeTab(id)}
          >
            <NavIcon isActive={isActive}>{icon}</NavIcon>
            <TabName theme={isDark} isActive={isActive}>
              {text}
            </TabName>
          </NavItem>
        </Link>
      )
    }}
  </VideoAppContext.Consumer>
)

export default NavListItems
