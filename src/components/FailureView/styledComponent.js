import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px;
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
  font-size: 16px;
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
