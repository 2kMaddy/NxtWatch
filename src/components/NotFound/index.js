import VideoAppContext from '../../context/VideoAppContext'
import Header from '../Header'
import NavBar from '../NavBar'
import {
  NotFoundContainer,
  NotFoundDetail,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponent'

const NotFound = () => (
  <VideoAppContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <>
          <Header />
          <NotFoundContainer theme={isDark}>
            <NavBar />
            <NotFoundDetail>
              <NotFoundImg
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading theme={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundDesc theme={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundDetail>
          </NotFoundContainer>
        </>
      )
    }}
  </VideoAppContext.Consumer>
)

export default NotFound
