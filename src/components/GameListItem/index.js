import {Link} from 'react-router-dom'
import VideoAppContext from '../../context/VideoAppContext'
import {GameItem, GameImage, GameTitle, GameViews} from './styledComponent'

const GameListItem = props => {
  const {thumbnailUrl, title, viewCount, id} = props
  return (
    <VideoAppContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GameItem>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle theme={isDark}>{title}</GameTitle>
              <GameViews>{`${viewCount} Watching Worldwide`}</GameViews>
            </GameItem>
          </Link>
        )
      }}
    </VideoAppContext.Consumer>
  )
}

export default GameListItem
