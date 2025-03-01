import Cookies from 'js-cookie'
import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {LogoutPopupComp, NavPopup} from '../Popup'
import VideoAppContext from '../../context/VideoAppContext'
import {
  HeaderContainer,
  WebSiteLogo,
  SettingsContainer,
  ThemeButton,
  ProfileImg,
} from './styledComponent'

class Header extends Component {
  logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <VideoAppContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value

          return (
            <HeaderContainer theme={isDark}>
              <Link to="/">
                <WebSiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <SettingsContainer>
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={changeTheme}
                  theme={isDark}
                >
                  {isDark ? <FiSun /> : <FaMoon />}
                </ThemeButton>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <NavPopup />
                <LogoutPopupComp onClickLogout={this.logOut} />
              </SettingsContainer>
            </HeaderContainer>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}
export default withRouter(Header)
