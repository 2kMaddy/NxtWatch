import VideoAppContext from '../../context/VideoAppContext'
import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

const FailureView = props => {
  const {onClickFunc} = props

  return (
    <VideoAppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureContainer>
            <FailureImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading theme={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request.Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={() => onClickFunc()}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </VideoAppContext.Consumer>
  )
}

export default FailureView
