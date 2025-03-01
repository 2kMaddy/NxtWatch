import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideoAppContext from '../../context/VideoAppContext'
import Header from '../Header'
import NavBar from '../NavBar'
import FailureView from '../FailureView'
import TrendingListItem from '../TrendingListItem'
import {
  Container,
  TrendingContainer,
  HeaderContainer,
  IconContainer,
  TrendingHeading,
  LoaderContainer,
  TrendingListItemContainer,
  GamesContainer,
} from './styledComponent'

class Trending extends Component {
  state = {isLoading: true, trendingList: [], isFailure: false}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(trendingVideosApiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const {videos} = data
        const updatedData = videos.map(each => ({
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
        }))
        this.setState({isLoading: false, trendingList: updatedData})
      } else {
        this.setState({isFailure: true, isLoading: false})
      }
    } catch (e) {
      this.setState({isFailure: true, isLoading: false})
    }
  }

  retryApiCall = () => {
    this.setState({isFailure: false, isLoading: true}, this.getTrendingList)
  }

  renderTrendingList = () => {
    const {isLoading, trendingList} = this.state
    return (
      <>
        {isLoading && (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
          </LoaderContainer>
        )}
        <TrendingListItemContainer>
          {trendingList.map(each => (
            <TrendingListItem key={each.id} {...each} />
          ))}
        </TrendingListItemContainer>
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
            <TrendingContainer theme={isDark} data-testid="trending">
              <Header />
              <Container>
                <NavBar alterActiveTab="TRENDING" />
                <GamesContainer>
                  {isFailure ? (
                    <FailureView onClickFunc={this.retryApiCall} />
                  ) : (
                    <HeaderContainer theme={isDark} data-testid="banner">
                      <IconContainer theme={isDark}>
                        <HiFire />
                      </IconContainer>
                      <TrendingHeading theme={isDark}>Trending</TrendingHeading>
                    </HeaderContainer>
                  )}
                  {this.renderTrendingList()}
                </GamesContainer>
              </Container>
            </TrendingContainer>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}

export default Trending
