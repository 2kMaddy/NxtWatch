import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#ffffff')};
  width: 20vw;
  color: ${prop => (prop.theme === true ? '#ffffff' : '#0f0f0f')};
  position: fixed;
  top: 66px;
  left: 0;
  @media (max-width: 767px) {
    display: none;
  }
`
export const NavItemsContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const ContactUsContainer = styled.div`
  color: ${prop => (prop.theme === true ? '#ffffff' : '#475569')};
  padding: 10px;
`
export const ContactUsHeading = styled.p`
  font-weight: bold;
  font-size: 18px;
`
export const SocialMediaIconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const FooterMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
`
