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

var Fabric = require('react-native-fabric')
var { Crashlytics } = Fabric;

class react_native_minimal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=> Crashlytics.crash()}>
          <Text style={styles.instructions}>
            TOUCH ME TO CRASH
          </Text>
        </TouchableHighlight>
      </View>
    );
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
