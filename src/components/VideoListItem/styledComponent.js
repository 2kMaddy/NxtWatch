import styled from 'styled-components'

export const VideoItem = styled.li`
  margin-bottom: 14px;
  margin-right: 16px;
  width: 180px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }
`

export const Thumbnail = styled.img`
  width: 180px;
  @media (max-width: 767px) {
    width: 90vw;
  }
`

export const VideoDetailContainer = styled.div`
  display: flex;
`

export const ChannelProfile = styled.img`
  margin-top: 8px;
  width: 30px;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  font-size: 12px;
  color: ${prop => (prop.theme === true ? '#ffffff' : '#000000')};
`

export const ChannelName = styled.p`
  font-size: 12px;
  color: #7e858e;
`
export const Info = styled.div`
  margin-top: -18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #7e858e;
  @media (max-width: 767px) {
    width: 130px;
  }
`
export const Views = styled(ChannelName)``

export const AgeOfVideo = styled(ChannelName)``
