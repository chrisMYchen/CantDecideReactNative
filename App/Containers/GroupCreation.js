import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class GroupCreation extends React.Component {
  handleNewGroup() {
    NavigationActions.waitingRoom();
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>


          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"Getting hungry? Let's make a group or join one of our friends'."}
            </Text>
          </View>
          <Button style={{alignSelf: 'center'}} onPress={()=> this.handleNewGroup()}>
            <NBText>I'll grab my friends!</NBText>
          </Button>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => NavigationActions.joinGroup()}>
              <View>
                <Text> My friend already made a group. </Text>
              </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

GroupCreation.contextTypes = {
  drawer: React.PropTypes.object
}
