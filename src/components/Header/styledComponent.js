import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#ffffff')};
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px;
  }
`

export const WebSiteLogo = styled.img`
  width: 100px;
  @media (max-width: 767px) {
    width: 60px;
  }
`

export const SettingsContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 120px;
  }
`
export const ThemeButton = styled.button`
  color: ${prop => (prop.theme === true ? 'white' : 'dark')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 22px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  @media (max-width: 767px) {
    width: 26px;
    display: none;
  }
`
