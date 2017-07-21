import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class WaitingRoom extends React.Component {
  handleNewGroup() {
    NavigationActions.waitingRoom();
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <NBText>
            Your group code is:
          </NBText>
          <NBText>
            1234
          </NBText>

          <Button block>
            <NBText>
            Start swiping!
            </NBText>
          </Button>
        </ScrollView>
      </View>
    )
  }
}

WaitingRoom.contextTypes = {
  drawer: React.PropTypes.object
}
