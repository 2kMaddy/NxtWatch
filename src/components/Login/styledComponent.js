import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex; /* Fixed typo from 'dispaly' */
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${prop => (prop.theme === true ? '#0f0f0f' : '#ffffff')};
  min-height: 100vh;
  font-family: Roboto;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: ${prop => (prop.theme === true ? '' : '0px 0px 3px 4px #e2e8f0')};
  padding: 40px 20px;
  border-radius: 8px;
  background-color: ${prop => (prop.theme === true ? '#000000' : '#ffffff')};
`
export const PageLogo = styled.img`
  width: 200px;
  margin: 20px 40px 30px 40px;
  @media (max-width: 767px) {
    width: 100px;
  }
`
export const LoginLabel = styled.label`
  color: ${prop => (prop.theme === true ? '#ffffff' : '#cccccc')};
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const LoginInput = styled.input`
  border: solid 1px #d7dfe9;
  border-radius: 6px;
  padding: 14px;
  font-size: 16px;
  margin-bottom: 20px;
  background: transparent;
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
  outline: none;
`
export const ShowPassContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBoxIn = styled.input`
  height: 16px; /* Corrected from 10px for better visibility */
  width: 16px;
  outline: none;
`
export const CheckBoxLabel = styled.label`
  font-size: 16px;
  margin-left: 8px; /* Added spacing between checkbox and label */
  color: ${prop => (prop.theme === true ? 'white' : 'black')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold; /* Fixed typo from 'weigth' */
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb; /* Added hover effect */
  }
`
