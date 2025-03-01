import styled from 'styled-components'

export const GamingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#f9f9f9')};
  font-family: Roboto;
`
export const Container = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
`
export const GamesContainer = styled(Container)`
  flex-direction: column;
  width: 100%;
`

export const LoaderContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
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
export const GamingHeading = styled.h1`
  fon-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : '000000')};
  @media (max-width: 767px) {
    font-size: 20px;
  } ;
`
export const GamesListItemContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: scroll;
  width: 100%;
`
