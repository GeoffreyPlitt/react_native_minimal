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
  TouchableHighlight,
  Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import {upload_xhr, upload_fetch} from './src/cloudinary'

const go = (method) => {
  ImagePicker.showImagePicker({}, (response) => {
    switch(method) {
      case 'xhr':
          upload_xhr(response.uri)
          .then( (result) => {
            Alert.alert(`Success: ${result.secure_url}`)
          })
          .catch(Alert.alert)
        break
      case 'fetch':
        upload_fetch(response.uri)
        .then( (result) => {
          Alert.alert(`Success: ${result.secure_url}`)
        })
        .catch(Alert.alert)
        break
    }
  })
}

class react_native_minimal extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={ () => go('xhr') }>
          <Text style={styles.instructions}>
            Choose photo and upload via XHR
          </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ () => go('fetch') }>
          <Text style={styles.instructions}>
            Choose photo and upload via FETCH
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
