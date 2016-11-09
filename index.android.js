/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class react_native_minimal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Click Me to Fetch</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onPressButton() {
    const url = 'https://res.cloudinary.com/vista-stardust/video/upload/c_fill,e_fade:500,h_1280,w_720/v1477443555/vaijhhcbwwikagus4uct.m3u8'
    fetch(url)
    .then(console.log)
    .catch(console.error)
    fetch(url)
    .then(console.log)
    .catch(console.error)
    fetch(url)
    .then(console.log)
    .catch(console.error)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_native_minimal', () => react_native_minimal);
