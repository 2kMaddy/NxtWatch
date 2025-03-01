import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginForm,
  PageLogo,
  LoginLabel,
  LoginInput,
  ShowPassContainer,
  CheckBoxIn,
  CheckBoxLabel,
  LoginButton,
} from './styledComponent'
import VideoAppContext from '../../context/VideoAppContext'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  toggleShowPassword = () =>
    this.setState(prev => ({showPassword: !prev.showPassword}))

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    try {
      const response = await fetch(loginApiUrl, options)
      const data = await response.json()

      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token, {expires: 1})
        const {history} = this.props
        history.replace('/')
      } else {
        this.setState({errorMsg: data.error_msg})
      }
    } catch (error) {
      this.setState({errorMsg: 'Something went wrong. Please try again later.'})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <VideoAppContext.Consumer>
        {value => {
          const {isDark} = value
          const {username, password, showPassword, errorMsg} = this.state
          return (
            <LoginContainer theme={isDark}>
              <LoginForm onSubmit={this.submitForm} theme={isDark}>
                <PageLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginLabel htmlFor="username" theme={isDark}>
                  USERNAME
                </LoginLabel>
                <LoginInput
                  theme={isDark}
                  type="text"
                  value={username}
                  placeholder="Username"
                  id="username"
                  onChange={this.onChangeUsername}
                />
                <LoginLabel theme={isDark} htmlFor="password">
                  PASSWORD
                </LoginLabel>
                <LoginInput
                  theme={isDark}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  placeholder="Password"
                  id="password"
                  onChange={this.onChangePassword}
                />
                <ShowPassContainer>
                  <CheckBoxIn
                    type="checkbox"
                    id="checkbox"
                    onChange={this.toggleShowPassword}
                  />
                  <CheckBoxLabel htmlFor="checkbox" theme={isDark}>
                    Show Password
                  </CheckBoxLabel>
                </ShowPassContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMsg && (
                  <p
                    style={{color: 'red', marginTop: '10px', fontSize: '10px'}}
                  >
                    {`*${errorMsg}`}
                  </p>
                )}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </VideoAppContext.Consumer>
    )
  }
}

export default Login
