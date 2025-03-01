import styled from 'styled-components'

export const LogoutPopup = styled.div`
  border-radius: 8px;
  padding: 20px;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#ffffff')};
`
export const PopuCloseButton = styled.button`
  border: solid 1px #64748b;
  background: transparent;
  outline: none;
  color: #64748b;
  border-radius: 10px;
  padding: 10px;
`

export const LogoutButton = styled.button`
  color: ${prop => (prop.theme === true ? 'white' : 'dark')};
  background-color: transparent;
  cursor: pointer;
  border: ${props =>
    props.display === 'lg'
      ? `solid 1px ${props.theme === true ? '#ffffff' : '#3b82f6'}`
      : 'none'};
  padding: 8px 10px;
  color: ${props => (props.theme === true ? 'white' : '#3b82f6')};
  border-radius: 4px;
  font-size: 12px;
  display: ${props => (props.display === 'lg' ? 'block' : 'none')};
  @media (max-width: 767px) {
    display: ${props => (props.display === 'sm' ? 'block' : 'none')};
    font-size: 22px;
    color: ${props => (props.theme === true ? 'white' : 'black')};
  }
`
export const LogoutConfirmMsg = styled.p`
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
`

export const LogoutButtonConfirm = styled.button`
  background-color: #3b82f6;
  color: white;
  border-radius: 10px;
  padding: 10px;
  border: none;
  margin-left: 20px;
`

export const MenuIcon = styled.button`
  display: none;
  border: none;
  background: transparent;
  outline: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: ${prop => (prop.theme === true ? '#ffffff' : '#000000')};
  }
`
export const NavPopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
`

export const NavCloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background-color: transparent;
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
  font-size: 22px;
  margin-bottom: 80px;
  margin: 20px;
`
