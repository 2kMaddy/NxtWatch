import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player/youtube'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import VideoAppContext from '../../context/VideoAppContext'
import Header from '../Header'
import NavBar from '../NavBar'
import FailureView from '../FailureView'

import {
  LoaderContainer,
  Container,
  VideoContainer,
  YoutubeVideoContainer,
  VideoTitle,
  InfoLikeContainer,
  Info,
  Views,
  AgeOfVideo,
  Button,
  ButtonContainer,
  HrLine,
  VideoInfo,
  ChannelInfo,
  ChannelProfile,
  ChannelNameandSubscribers,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponent'

class VideoItemDetails extends Component {
  state = {
    isLoading: true,
    videoDetail: {},
    isFailure: false,
    channel: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
    this.loadSavedStates()
  }

  loadSavedStates = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const savedStatus = JSON.parse(localStorage.getItem(`video_status_${id}`))

    if (savedStatus) {
      this.setState({
        isLiked: savedStatus.isLiked,
        isDisliked: savedStatus.isDisliked,
        isSaved: savedStatus.isSaved,
      })
    }
  }

  saveStatusToLocalStorage = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {isLiked, isDisliked, isSaved} = this.state
    localStorage.setItem(
      `video_status_${id}`,
      JSON.stringify({isLiked, isDisliked, isSaved}),
    )
  }

  changeLike = () => {
    this.setState(
      prevState => ({
        isLiked: !prevState.isLiked,
        isDisliked: prevState.isLiked ? prevState.isDisliked : false,
      }),
      this.saveStatusToLocalStorage,
    )
  }

  changeDislike = () => {
    this.setState(
      prevState => ({
        isDisliked: !prevState.isDisliked,
        isLiked: prevState.isDisliked ? prevState.isLiked : false,
      }),
      this.saveStatusToLocalStorage,
    )
  }

  changeSave = () => {
    this.setState(
      prevState => ({
        isSaved: !prevState.isSaved,
      }),
      this.saveStatusToLocalStorage,
    )
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(videoItemDetailsApiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const videoDetail = data.video_details
        const updatedVideoData = {
          id: videoDetail.id,
          title: videoDetail.title,
          videoUrl: videoDetail.video_url,
          thumbnailUrl: videoDetail.thumbnail_url,
          channel: {
            name: videoDetail.channel.name,
            profileImageUrl: videoDetail.channel.profile_image_url,
            subscriberCount: videoDetail.channel.subscriber_count,
          },
          viewCount: videoDetail.view_count,
          publishedAt: videoDetail.published_at,
          description: videoDetail.description,
        }
        const {channel} = updatedVideoData
        this.setState({
          isLoading: false,
          videoDetail: updatedVideoData,
          channel,
        })
      }
    } catch (e) {
      console.log(e.message)
      this.setState({isFailure: true, isLoading: false})
    }
  }

  retryFailure = () => {
    this.setState({isLoading: true, isFailure: false}, this.getVideoItemDetails)
  }

  render() {
    const {
      isLoading,
      videoDetail,
      channel,
      isFailure,
      isLiked,
      isDisliked,
      isSaved,
    } = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      thumbnailUrl,
      id,
    } = videoDetail || {}
    const {name, profileImageUrl, subscriberCount} = channel
    let formattedAge = ''
    if (publishedAt) {
      const ageOfVideo = formatDistanceToNow(new Date(publishedAt)).split(' ')
      if (ageOfVideo.length > 1) {
        ageOfVideo.shift()
      }
      ageOfVideo.push('ago')
      formattedAge = ageOfVideo.join(' ')
    }

    return (
      <VideoAppContext.Consumer>
        {value => {
          const {isDark, addSaveVideos} = value
          const objectForSave = {
            channel,
            publishedAt,
            thumbnailUrl,
            title,
            viewCount,
            id,
          }
          const onClickAddVideos = () => {
            addSaveVideos(objectForSave)
            this.changeSave()
          }
          return (
            <div data-testid="videoItemDetails">
              <Header />
              <Container>
                <NavBar />
                <VideoContainer theme={isDark}>
                  {isFailure && <FailureView onClickFunc={this.retryFailure} />}
                  {isLoading && (
                    <LoaderContainer data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color="#ff0000"
                        height="50"
                        width="50"
                      />
                    </LoaderContainer>
                  )}
                  <YoutubeVideoContainer>
                    <ReactPlayer url={videoUrl} />
                  </YoutubeVideoContainer>
                  <VideoTitle theme={isDark}>{title}</VideoTitle>
                  <InfoLikeContainer>
                    <Info>
                      <Views>{`${viewCount} views`}</Views>
                      <BsDot />
                      <AgeOfVideo>{formattedAge}</AgeOfVideo>
                    </Info>
                    <ButtonContainer>
                      <Button
                        type="button"
                        status={isLiked}
                        onClick={this.changeLike}
                      >
                        <BiLike
                          style={{fontSize: '20px', marginRight: '6px'}}
                        />
                        Like
                      </Button>
                      <Button
                        type="button"
                        status={isDisliked}
                        onClick={this.changeDislike}
                      >
                        <BiDislike
                          style={{fontSize: '20px', marginRight: '6px'}}
                        />
                        Dislike
                      </Button>
                      <Button
                        type="button"
                        status={isSaved}
                        onClick={onClickAddVideos}
                      >
                        <RiPlayListAddFill
                          style={{fontSize: '20px', marginRight: '6px'}}
                        />
                        {isSaved ? 'Saved' : 'Save'}
                      </Button>
                    </ButtonContainer>
                  </InfoLikeContainer>
                  <HrLine />
                  <VideoInfo>
                    <ChannelInfo>
                      <ChannelProfile
                        src={profileImageUrl}
                        alt="channel logo"
                      />
                      <ChannelNameandSubscribers>
                        <ChannelName theme={isDark}>{name}</ChannelName>
                        <Subscribers>{`${subscriberCount} subscribers`}</Subscribers>
                      </ChannelNameandSubscribers>
                    </ChannelInfo>
                    <Description theme={isDark}>{description}</Description>
                  </VideoInfo>
                </VideoContainer>
              </Container>
            </div>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}

export default VideoItemDetails
