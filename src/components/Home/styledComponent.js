import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-family: Roboto;
  background-color: ${prop => (prop.theme === true ? '#181818' : '#f9f9f9')};
  background-size: cover;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`
export const VideoContainer = styled(Container)`
  flex-direction: column;
  padding: 12px;
  width: 100%;
  margin: 10vh 0 0 20vw;
  @media (max-width: 767px) {
    margin: 10vh 0 0 0;
  }
`

export const LoaderContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
`
export const SearchBar = styled.input`
  padding: 6px 14px;
  height: 32px;
  width: 350px;
  font-size: 16px;
  background-color: ${prop => (prop.theme === true ? 'black' : 'white')};
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
  outline: none;
  border: solid 1px #e2e8f0;
`

export const SearchButton = styled.button`
  cursor: pointer;
  height: 32px;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#cbd5e1')};
  border: solid 1px #e2e8f0;
  padding: 7px 20px;
  font-size: 12px;
  color: #616e7c;
  font-weight: bold;
`
export const VideoListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 20px;
`

export const FailureImg = styled.img`
  width: 260px;
  @media (max-width: 767px) {
    width: 220px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 28px;
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
  @media (max-width: 767px) {
    font-size: 24px;
  } ;
`

export const FailureDescription = styled.p`
  font-size: 18px;
  color: #475569;
  @media (max-width: 767px) {
    font-size: 12px;
  } ;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  font-weigth: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-size: cover;
  margin-bottom: 20px;
`

export const BannerLogo = styled.img`
  width: 200px;
`

export const PremiumMsg = styled.p`
  font-size: 18px;
  width: 100%;
`
export const BuyItButton = styled.button`
  border: solid 1px #000000;
  background-color: transparent;
  padding: 14px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
`
