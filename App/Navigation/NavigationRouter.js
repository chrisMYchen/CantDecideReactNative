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
import JoinGroup from '../Containers/JoinGroup'
import RestaurantSwiper from '../Containers/RestaurantSwiper'
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' />
          <Scene key='login' component={Login} title='Login' />
          <Scene key='groupCreation' component={GroupCreation} />
          <Scene key='joinGroup' component={JoinGroup} />
          <Scene key='waitingRoom' component={WaitingRoom} />
          <Scene key='restaurantSwiper' component={RestaurantSwiper} />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
