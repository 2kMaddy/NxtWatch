import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  background-color: ${prop => (prop.theme === true ? '#000000' : '#f9f9f9')};
`

export const NotFoundDetail = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Roboto;
`

export const NotFoundImg = styled.img`
  width: 270px;
  @media (max-width: 767px) {
    width: 230px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 28px;
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
  @media (max-width: 767px) {
    font-size: 24px;
  } ;
`

export const NotFoundDesc = styled.p`
  font-size: 18px;
  color: #475569;
  @media (max-width: 767px) {
    font-size: 12px;
  } ;
`
