import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {RiCloseFill} from 'react-icons/ri'
import VideoAppContext from '../../context/VideoAppContext'
import {
  HomeContainer,
  Container,
  LoaderContainer,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  VideoContainer,
  VideoListContainer,
  FailureContainer,
  FailureHeading,
  FailureDescription,
  RetryButton,
  FailureImg,
  BannerContainer,
  BannerLogo,
  PremiumMsg,
  BuyItButton,
  CloseButton,
} from './styledComponent'
import Header from '../Header'
import NavBar from '../NavBar'
import VideoListItem from '../VideoListItem'
import FailureView from '../FailureView'

class Home extends Component {
  state = {
    isLoading: true,
    videoList: [],
    searchInput: '',
    isFailure: false,
    isEmpty: false,
    banner: true,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    try {
      const response = await fetch(homeVideosApiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const {videos} = data
        const hasEmpty = videos.length === 0
        const updatedData = videos.map(each => ({
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
          channel: {
            profileImageUrl: each.channel.profile_image_url,
            name: each.channel.name,
          },
        }))
        console.log(updatedData)
        this.setState({
          videoList: updatedData,
          isLoading: false,
          isEmpty: hasEmpty,
        })
      } else {
        this.setState({
          isLoading: false,
          isFailure: true,
        })
      }
    } catch (e) {
      this.setState({
        isLoading: false,
        isFailure: true,
      })
      console.log(e.message)
    }
  }

  searchVideo = event => {
    event.preventDefault()
    this.setState(
      {videoList: [], isLoading: true, isFailure: false, isEmpty: false},
      this.getVideosList,
    )
  }

  retryVideosList = () => {
    this.setState(
      {isLoading: true, isFailure: false, isEmpty: false},
      this.getVideosList,
    )
  }

  renderVideoContainer = () => {
    const {isLoading, videoList} = this.state

    return (
      <>
        {isLoading && (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
          </LoaderContainer>
        )}

        <VideoListContainer>
          {videoList.map(each => (
            <VideoListItem key={each.id} {...each} />
          ))}
        </VideoListContainer>
      </>
    )
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  closeBanner = () => {
    this.setState({banner: false})
  }

  render() {
    const {searchInput, isFailure, isEmpty, banner} = this.state

    return (
      <VideoAppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer theme={isDark} data-testid="home">
              <Header />
              <Container>
                <NavBar alterActiveTab="HOME" />
                <VideoContainer>
                  {banner && (
                    <BannerContainer data-testid="banner">
                      <div>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <PremiumMsg>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </PremiumMsg>
                        <BuyItButton type="button">GET IT NOW</BuyItButton>
                      </div>
                      <div>
                        <CloseButton
                          data-testid="close"
                          type="button"
                          onClick={this.closeBanner}
                        >
                          <RiCloseFill />
                        </CloseButton>
                      </div>
                    </BannerContainer>
                  )}
                  <SearchBarContainer onSubmit={this.searchVideo}>
                    <SearchBar
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.changeSearchInput}
                      theme={isDark}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      theme={isDark}
                      onClick={this.searchVideo}
                    >
                      <BsSearch />
                    </SearchButton>
                  </SearchBarContainer>
                  {isFailure && (
                    <FailureView onClickFunc={this.retryVideosList} />
                  )}
                  {isEmpty && (
                    <FailureContainer>
                      <FailureImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <FailureHeading theme={isDark}>
                        No Search results found
                      </FailureHeading>
                      <FailureDescription>
                        Try different key words or remove search filter
                      </FailureDescription>
                      <RetryButton type="button" onClick={this.retryVideosList}>
                        Retry
                      </RetryButton>
                    </FailureContainer>
                  )}
                  {this.renderVideoContainer()}
                </VideoContainer>
              </Container>
            </HomeContainer>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}

export default Home
