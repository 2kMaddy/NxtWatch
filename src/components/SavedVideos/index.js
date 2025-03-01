import {Component} from 'react'
import {RiPlayListAddFill} from 'react-icons/ri'
import VideoAppContext from '../../context/VideoAppContext'
import Header from '../Header'
import NavBar from '../NavBar'
import TrendingListItem from '../TrendingListItem'
import {
  Container,
  TrendingContainer,
  HeaderContainer,
  IconContainer,
  TrendingHeading,
  TrendingListItemContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  GamesContainer,
} from './styledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <VideoAppContext.Consumer>
        {value => {
          const {isDark, savedVideosList} = value
          const isEmpty = savedVideosList.length === 0
          return (
            <TrendingContainer theme={isDark} data-testid="savedVideos">
              <Header />
              <Container>
                <NavBar alterActiveTab="SAVEDVIDEOS" />
                <GamesContainer>
                  {isEmpty ? (
                    <FailureContainer>
                      <FailureImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <FailureHeading theme={isDark}>
                        No saved videos found
                      </FailureHeading>
                      <FailureDescription>
                        You can save your videos while watching them
                      </FailureDescription>
                    </FailureContainer>
                  ) : (
                    <>
                      <HeaderContainer theme={isDark} data-testid="banner">
                        <IconContainer theme={isDark}>
                          <RiPlayListAddFill />
                        </IconContainer>
                        <TrendingHeading theme={isDark}>
                          Saved Videos
                        </TrendingHeading>
                      </HeaderContainer>
                      <TrendingListItemContainer>
                        {savedVideosList.map(each => (
                          <TrendingListItem key={each.id} {...each} />
                        ))}
                      </TrendingListItemContainer>
                    </>
                  )}
                </GamesContainer>
              </Container>
            </TrendingContainer>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}

export default SavedVideos
