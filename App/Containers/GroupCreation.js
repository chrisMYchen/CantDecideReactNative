import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Button, Text as NBText, Container, Content, Icon } from 'native-base'
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
      <Container>

        <Image style={styles.backgroundImage} resizeMode='stretch' />
        <Content>
          <Button iconLeft light onPress={()=> NavigationActions.pop()}>
           <Icon name='arrow-back' />
           <Text>Back</Text>
         </Button>
          <View style={styles.section} >
            <Image />
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
        </Content>
      </Container>
    )
  }
}

GroupCreation.contextTypes = {
  drawer: React.PropTypes.object
}
