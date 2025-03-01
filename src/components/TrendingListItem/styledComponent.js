import styled from 'styled-components'

export const TrendingItem = styled.li`
  width: 100%;
  padding: 40px;
  display: flex;
  @media (max-width: 767px) {
    padding: 40px 20px;
  } ;
`

export const TrendingThumbnail = styled.img`
  width: 50%;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  color: ${prop => (prop.theme === true ? '#ffffff' : '#000000')};
  @media (max-width: 767px) {
    font-size: 14px;
  } ;
`

export const ChannelName = styled.p`
  font-size: 12px;
  color: #7e858e;
  @media (max-width: 767px) {
    font-size: 10px;
  } ;
`
export const Info = styled.div`
  margin-top: -18px;
  display: flex;
  align-items: center;
  width: 100%;
  color: #7e858e;
  @media (max-width: 767px) {
    width: 130px;
  } ;
`
export const Views = styled(ChannelName)`
  margin-rigth: 10px;
`

export const AgeOfVideo = styled(ChannelName)``
