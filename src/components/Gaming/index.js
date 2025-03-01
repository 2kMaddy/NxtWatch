import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import VideoAppContext from '../../context/VideoAppContext'
import Header from '../Header'
import NavBar from '../NavBar'
import FailureView from '../FailureView'
import GameListItem from '../GameListItem'

import {
  GamingContainer,
  Container,
  GamesContainer,
  HeaderContainer,
  IconContainer,
  GamingHeading,
  LoaderContainer,
  GamesListItemContainer,
} from './styledComponent'

class Gaming extends Component {
  state = {isLoading: true, gamesList: [], isFailure: false}

  componentDidMount() {
    this.getGamesList()
  }

  getGamesList = async () => {
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(gamingVideosApiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const {videos} = data
        const updatedData = videos.map(each => ({
          id: each.id,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))
        this.setState({isLoading: false, gamesList: updatedData})
      } else {
        this.setState({isLoading: false, isFailure: true})
      }
    } catch (e) {
      console.log(e.message)
      this.setState({isLoading: false, isFailure: true})
    }
  }

  retryApicall = () => {
    this.setState({isFailure: false, isLoading: true}, this.getGamesList)
  }

  renderGameList = () => {
    const {isLoading, gamesList} = this.state
    return (
      <>
        {isLoading && (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
          </LoaderContainer>
        )}
        <GamesListItemContainer>
          {gamesList.map(each => (
            <GameListItem key={each.id} {...each} />
          ))}
        </GamesListItemContainer>
      </>
    )
  }

  render() {
    const {isFailure} = this.state
    return (
      <VideoAppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <GamingContainer data-testid="gaming" theme={isDark}>
              <Header />
              <Container>
                <NavBar alterActiveTab="GAMING" />
                <GamesContainer theme={isDark}>
                  {isFailure ? (
                    <FailureView onClickFunc={this.retryApicall} />
                  ) : (
                    <HeaderContainer theme={isDark} data-testid="banner">
                      <IconContainer theme={isDark}>
                        <SiYoutubegaming />
                      </IconContainer>
                      <GamingHeading theme={isDark}>Gaming</GamingHeading>
                    </HeaderContainer>
                  )}
                  {this.renderGameList()}
                </GamesContainer>
              </Container>
            </GamingContainer>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}

export default Gaming
