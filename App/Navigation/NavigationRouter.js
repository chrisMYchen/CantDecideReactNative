import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import GroupCreation from '../Containers/GroupCreation'
// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import ListviewExample from '../Containers/ListviewExample'
import CardExample from '../Containers/CardExample'
import Login from '../Containers/LoginScreen'
import WaitingRoom from '../Containers/WaitingRoom'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='login' component={Login} title='Login' />
          <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' />
          <Scene key='waitingRoom' component={WaitingRoom} />
          <Scene key='groupCreation' component={GroupCreation} />
          <Scene key='listViewExample' component={ListviewExample}/>
          <Scene key='cardExample' component={CardExample}/>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
