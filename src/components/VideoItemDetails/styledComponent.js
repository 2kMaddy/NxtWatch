import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  font-family: Roboto;
`

export const LoaderContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const VideoContainer = styled(Container)`
  flex-direction: column;
  width: 100%;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow-x: auto;
`

export const YoutubeVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 70vw;
  @media (max-width: 767px) {
    width: 80vw;
  } ;
`
export const VideoTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === true ? 'white' : 'black')};
`
export const InfoLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  } ;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7e858e;
  @media (max-width: 767px) {
    width: 100px;
  }
`
export const Views = styled.p`
  font-size: 12px;
  color: #7e858e;
`

export const AgeOfVideo = styled(Views)``

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 80px;
  font-size: 12px;
  color: ${props => (props.status === true ? '#2563eb' : '#64748b')};
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
`
export const ButtonText = styled.p`
  margin-right: 10px;
  font-size: 18px;
`

export const HrLine = styled.hr`
  border: solid 1px #7e858e50;
  width: 100%;
  align-self: center;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelInfo = styled.div`
  display: flex;
`
export const ChannelProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 16px;
`

export const ChannelNameandSubscribers = styled(VideoInfo)`
  margin-left: 20px;
`

export const ChannelName = styled.p`
  font-size: 12px;
  color: ${props => (props.theme === true ? 'white' : 'black')};
`

export const Subscribers = styled(Views)``

export const Description = styled.p`
  margin-left: 60px;
  margin-top: 20px;
  font-size: 14px;
  color: ${props => (props.theme === true ? 'white' : 'black')};
`
