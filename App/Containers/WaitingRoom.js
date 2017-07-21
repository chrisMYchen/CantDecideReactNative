import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Button, Text as NBText, Container, Content, Icon } from 'native-base'
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
      <Container>
        <Content padding>
          <Image style={styles.backgroundImage} resizeMode='stretch' />
          <Button iconLeft light onPress={()=> NavigationActions.pop()}>
           <Icon name='arrow-back' />
           <Text>Back</Text>
         </Button>
          <View style={styles.section}>
          <NBText>
            Friends:
          </NBText>
            <NBText>
            3
            </NBText>
          </View>

          <View style={styles.section}>
          <NBText>
            Your group code is:
          </NBText>
          <NBText>
            1234
          </NBText>
          </View>
          <View style={styles.section}>
          <Button block onPress={() => NavigationActions.restaurantSwiper()}> 
            <NBText>
            Start swiping!
            </NBText>
          </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

WaitingRoom.contextTypes = {
  drawer: React.PropTypes.object
}
