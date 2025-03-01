import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import VideoAppContext from '../../context/VideoAppContext'

import {
  TrendingItem,
  TrendingThumbnail,
  VideoTitle,
  ChannelName,
  Info,
  Views,
  AgeOfVideo,
} from './styledComponent'

const TrendingListItem = props => {
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = props
  const {name} = channel
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
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <TrendingItem>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <VideoTitle theme={isDark}>{title}</VideoTitle>
                <ChannelName>{name}</ChannelName>
                <Info>
                  <Views>{`${viewCount} views`}</Views>
                  <BsDot />
                  <AgeOfVideo>{formattedAge}</AgeOfVideo>
                </Info>
              </div>
            </TrendingItem>
          </Link>
        )
      }}
    </VideoAppContext.Consumer>
  )
}

export default TrendingListItem
