import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Container, Content, Button, Text as NBText, Input, Item, Label, Icon } from 'native-base'
import { Images } from '../Themes'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class JoinGroup extends React.Component {
  handleNewGroup() {
    NavigationActions.waitingRoom();
  }

  render () {
    return (
      <Container>
        <Content>
        <Button iconLeft light onPress={()=> NavigationActions.pop()}>
         <Icon name='arrow-back' />
         <Text>Back</Text>
       </Button>
          <Item stackedLabel>
            <Label >Group code:</Label>
            <Input placeholder="1234" />
          </Item>
        </Content>
      </Container>
    )
  }
}

JoinGroup.contextTypes = {
  drawer: React.PropTypes.object
}
