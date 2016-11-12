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

import Analytics from 'analytics-react-native';
const analytics = new Analytics('API_KEY_GOES_HERE');

class react_native_minimal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress}>
          <Text style={styles.instructions}>
            Click me
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  onPress() {
    analytics.track({
      userId: '019mr8mf4r',
      event: 'Item Purchased',
      properties: {
        revenue: 39.95,
        shippingMethod: '2-day'
      }
    })
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
