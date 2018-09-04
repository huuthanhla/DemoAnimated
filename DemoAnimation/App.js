/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Animated // 1
} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props)
    //2
    this.state = {
      marginTopAnim: Animated.Value(0)
    }
  }

  render() {
    //3
    const { marginTopAnim } = this.state

    return (
      <View style={styles.container}>
        <Animated.View style={{
            backgroundColor: '#2196F3',
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: marginTopAnim
          }}
        />

      </View>
    );
  }

  //4
  componentDidMount() {
    Animated.timing(
      this.state.marginTopAnim,
      {
        duration: 1000,
        toValue: 300,
        easing: Easing.linear
      }
    ).start()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
