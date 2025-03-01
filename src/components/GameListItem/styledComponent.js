import styled from 'styled-components'

export const GameItem = styled.li`
  width: 160px;
  margin: 14px;
  font-family: Roboto;
  @media (max-width: 767px) {
    width: 90vw;
  } ;
`
export const GameImage = styled.img`
  width: 100%;
`
export const GameTitle = styled.p`
  font-size: 20px;
  color: ${props => (props.theme === true ? 'white' : 'black')};
`
export const GameViews = styled.p`
  color: #7e858e;
  font-size: 12px;
`
