import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import VideoAppContext from './context/VideoAppContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

const navListItems = [
  {icon: <TiHome />, text: 'Home', id: 'HOME', path: '/'},
  {icon: <HiFire />, text: 'Trending', id: 'TRENDING', path: '/trending'},
  {icon: <SiYoutubegaming />, text: 'Gaming', id: 'GAMING', path: '/gaming'},
  {
    icon: <RiPlayListAddFill />,
    text: 'Saved videos',
    id: 'SAVEDVIDEOS',
    path: '/saved-videos',
  },
]

class App extends Component {
  state = {
    isDark: false,
    activeTab: navListItems[0].id,
    showNavBar: false,
    savedVideosList: [],
  }

  componentDidMount() {
    // Retrieve saved videos from localStorage
    const storedVideos = localStorage.getItem('savedVideos')
    if (storedVideos) {
      this.setState({savedVideosList: JSON.parse(storedVideos)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {savedVideosList} = this.state
    if (prevState.savedVideosList !== savedVideosList) {
      localStorage.setItem('savedVideos', JSON.stringify(savedVideosList))
    }
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  toggleNavBar = () => {
    this.setState(prev => ({showNavBar: !prev.showNavBar}))
  }

  addSaveVideos = object => {
    this.setState(prev => {
      const isVideoSaved = prev.savedVideosList.some(
        video => video.id === object.id,
      )

      const updatedList = isVideoSaved
        ? prev.savedVideosList.filter(video => video.id !== object.id)
        : [...prev.savedVideosList, object]

      return {savedVideosList: updatedList}
    })
  }

  render() {
    const {isDark, activeTab, showNavBar, savedVideosList} = this.state
    return (
      <VideoAppContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          navListItems,
          activeTab,
          changeTab: this.changeTab,
          showNavBar,
          toggleNavBar: this.toggleNavBar,
          savedVideosList,
          addSaveVideos: this.addSaveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </VideoAppContext.Provider>
    )
  }
}

export default App
