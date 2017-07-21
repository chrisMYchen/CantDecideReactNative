import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Image} from 'react-native'
import {
  Button,
  Container,
  View,
  Content,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from 'native-base';
import SwipeCards from 'react-native-swipe-cards'
// import Icon from 'react-native-vector-icons/Ionicons'
let cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../Images/food1.jpg')
  }, {
    text: 'Card Two',
    name: 'Two',
    image: require('../Images/food2.jpeg')
  }, {
    text: 'Card Three',
    name: 'Three',
    image: require('../Images/food3.jpg')
  }
];

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={this.props.image}/>
        <Text>This is card {this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Button block info>
          <Text>Info</Text>
        </Button>
        <Text>
          No more!!
        </Text>
        <Text>No more cards</Text>
      </View>
    )
  }
}

class RestaurantSwiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup(card) {
    console.log("yup")
  }

  handleNope(card) {
    console.log("nope")
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        this.setState({outOfCards: true});
      }

    }

  }
  render() {
    return (
      <Container>
        <SwipeCards cards={this.state.cards} loop={false} renderCard={(cardData) => <Card {...cardData}/>} renderNoMoreCards={() => <NoMoreCards/>} showYup={true} showNope={true} handleYup={this.handleYup} handleNope={this.handleNope} cardRemoved={this.cardRemoved.bind(this)}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1
  },
  thumbnail: {
    width: 300,
    height: 300
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    fontSize: 36,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  movedown: {
    paddingTop: 50
  }
});

RestaurantSwiper.contextTypes = {
  drawer: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(RestaurantSwiper)
