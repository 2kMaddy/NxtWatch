import styled from 'styled-components'

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  margin: -8px 0;
  ${prop =>
    prop.theme === true
      ? `background-color: ${
          prop.isActive === true ? '#181818' : 'transparent'
        }`
      : `background-color: ${
          prop.isActive === true ? '#e2e8f0' : 'transparent'
        }`};
`

export const NavIcon = styled.p`
  font-size: 16px;
  margin-left: 20px;
  color: ${prop => (prop.isActive === true ? 'red' : '#616e7c')};
`
export const TabName = styled(NavIcon)`
  margin-left: 20px;
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
  font-weight: ${prop => (prop.isActive === true ? 'bold' : 'none')};
`
