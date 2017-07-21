import React from 'react'
import { connect } from 'react-redux'
import {Image} from 'react-native'
import {Button,  Container, Content, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons'
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../Images/food1.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../Images/food2.jpeg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../Images/food3.jpg'),
  }
];

class RestaurantSwiper extends React.Component {
  render () {
    return (
      <Container >
            <View>
              <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={cards}
                looping={false}
                renderEmpty={() =>
                  <View style={{ alignSelf: "center" }}>
                    <Text>Over</Text>
                  </View>
                }
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          <Text>{item.text}</Text>
                          <Text note>NativeBase</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
              />
          </View>
          <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
             <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
              <Icon name="arrow-back" />
              <Text>Swipe Left</Text>
             </Button>
             <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
              <Icon name="arrow-forward" />
              <Text>Swipe Right</Text>
             </Button>
          </View>
      </Container>
    )
  }
}
RestaurantSwiper.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(RestaurantSwiper)
