import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import VideoAppContext from '../../context/VideoAppContext'
import './index.css'
import {
  Thumbnail,
  VideoItem,
  VideoDetailContainer,
  ChannelProfile,
  VideoTitle,
  ChannelName,
  Info,
  Views,
  AgeOfVideo,
} from './styledComponent'

const VideoListItem = props => {
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = props
  const {name, profileImageUrl} = channel
  const ageOfVideo = formatDistanceToNow(new Date(publishedAt)).split(' ')
  if (ageOfVideo.length > 1) {
    ageOfVideo.shift()
  }
  ageOfVideo.push('ago')
  const formattedAge = ageOfVideo.join(' ')
  return (
    <VideoAppContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} className="video-detail-link">
            <VideoItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailContainer>
                <div>
                  <ChannelProfile src={profileImageUrl} alt="channel logo" />
                </div>
                <div>
                  <VideoTitle theme={isDark}>{title}</VideoTitle>
                  <ChannelName>{name}</ChannelName>
                  <Info>
                    <Views>{`${viewCount} views`}</Views>
                    <BsDot />
                    <AgeOfVideo>{formattedAge}</AgeOfVideo>
                  </Info>
                </div>
              </VideoDetailContainer>
            </VideoItem>
          </Link>
        )
      }}
    </VideoAppContext.Consumer>
  )
}
export default VideoListItem
