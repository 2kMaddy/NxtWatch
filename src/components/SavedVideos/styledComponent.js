import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  font-family: Roboto;
`

export const TrendingContainer = styled(Container)`
  flex-direction: column;
  width: 100%;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#f9f9f9')};
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props => (props.theme === true ? '#181818' : '#f4f4f4')};
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px;
  } ;
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 100px;
  background-color: ${props => (props.theme === true ? '#000000' : '#ebebeb')};
  margin-right: 20px;
  color: red;
  font-size: 28px;
  @media (max-width: 767px) {
    font-size: 20px;
  } ;
`

export const TrendingHeading = styled.h1`
  fon-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : '000000')};
  @media (max-width: 767px) {
    font-size: 20px;
  } ;
`
export const LoaderContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const TrendingListItemContainer = styled.ul`
  list-styled-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
export const GamesContainer = styled(Container)`
  flex-direction: column;
  width: 100%;
`
