import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button, Text as NBText, Container, Content, Item } from 'native-base'
import { Images } from '../Themes'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import { Col, Row, Grid } from 'react-native-easy-grid';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

  render () {
    return (
      <Container contentContainerStyle={{ justifyContent: 'space-between' }}>
        <Image style={styles.backgroundImage} resizeMode='stretch' />
        <Content padder>
            <View>
              <Image style={styles.logo} />
            </View>

            <View >
              <Image />
              <Text>
                {"This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite."}
              </Text>
            </View>
            <View>
            <Button onPress={()=> NavigationActions.login()}>
              <NBText>Hungry?</NBText>
            </Button>
            </View>
        </Content>
      </Container>
    )
  }
}

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}
