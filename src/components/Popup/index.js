import {FiLogOut, FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import Popup from 'reactjs-popup'
import NavListItems from '../NavListItems'
import {
  LogoutButton,
  LogoutPopup,
  PopuCloseButton,
  LogoutConfirmMsg,
  LogoutButtonConfirm,
  MenuIcon,
  NavPopContainer,
  NavCloseButton,
} from './styledComponent'
import VideoAppContext from '../../context/VideoAppContext'

export const LogoutPopupComp = ({onClickLogout}) => (
  <VideoAppContext.Consumer>
    {({isDark}) => (
      <Popup
        modal
        trigger={
          <div>
            <LogoutButton type="button" display="lg" theme={isDark}>
              Logout
            </LogoutButton>
            <LogoutButton type="button" display="sm" theme={isDark}>
              <FiLogOut />
            </LogoutButton>
          </div>
        }
      >
        {close => (
          <LogoutPopup theme={isDark}>
            <LogoutConfirmMsg theme={isDark}>
              Are you sure, you want to logout
            </LogoutConfirmMsg>
            <PopuCloseButton type="button" onClick={close}>
              Cancel
            </PopuCloseButton>
            <LogoutButtonConfirm
              type="button"
              onClick={() => {
                if (onClickLogout) onClickLogout()
                close()
              }}
            >
              Confirm
            </LogoutButtonConfirm>
          </LogoutPopup>
        )}
      </Popup>
    )}
  </VideoAppContext.Consumer>
)

export const NavPopup = () => (
  <VideoAppContext.Consumer>
    {({isDark, navListItems}) => (
      <Popup
        modal
        trigger={
          <MenuIcon theme={isDark}>
            <FiMenu />
          </MenuIcon>
        }
      >
        {close => (
          <NavPopContainer theme={isDark}>
            <NavCloseButton theme={isDark} type="button" onClick={close}>
              <GrClose />
            </NavCloseButton>
            {navListItems.map(each => (
              <NavListItems {...each} key={each.id} />
            ))}
          </NavPopContainer>
        )}
      </Popup>
    )}
  </VideoAppContext.Consumer>
)
