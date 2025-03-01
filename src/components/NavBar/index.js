import VideoAppContext from '../../context/VideoAppContext'
import {
  NavContainer,
  NavItemsContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaIconContainer,
  SocialMediaIcon,
  FooterMsg,
} from './styledComponent'
import NavListItems from '../NavListItems'

const NavBar = props => {
  const {alterActiveTab} = props
  return (
    <VideoAppContext.Consumer>
      {value => {
        const {isDark, navListItems} = value
        return (
          <NavContainer theme={isDark}>
            <NavItemsContainer>
              {navListItems.map(each => (
                <NavListItems
                  {...each}
                  key={each.id}
                  alterActiveTab={alterActiveTab}
                />
              ))}
            </NavItemsContainer>
            <ContactUsContainer theme={isDark}>
              <ContactUsHeading>CONTACT US</ContactUsHeading>
              <SocialMediaIconContainer>
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaIconContainer>
              <FooterMsg>
                Enjoy! Now to see your channels and recommendations!
              </FooterMsg>
            </ContactUsContainer>
          </NavContainer>
        )
      }}
    </VideoAppContext.Consumer>
  )
}

export default NavBar
