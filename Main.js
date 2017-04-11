import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Video from 'react-native-video'
import Spinner from 'react-native-loading-spinner-overlay'

export default class Main extends Component {

  constructor(props) {
    super()
    // Initially:
    // 1) Don't load video yet
    // 2) show spinner at start
    this.state = {
      showSpinner: true,
      loadVideo: false
    }
  }

  componentDidMount() {
    // Then after ONE SECOND:
    setTimeout(() => {
      this.setState({loadVideo: true}) // start loading the video
    }, 1000)
  }

  setTime() {
    // Finally, when the first progress update happens, turn off the spinner.
    this.setState({showSpinner: false})
  }

  renderVideo() {
    if(!this.state.loadVideo) return null
    // else
    return (
      <Video source={{uri: "https://media.w3.org/2010/05/bunny/trailer.mp4"}}   // Can be a URL or a local file.
         ref={(ref) => {
           this.player = ref
         }}                                      // Store reference
         rate={1.0}                              // 0 is paused, 1 is normal.
         volume={1.0}                            // 0 is muted, 1 is normal.
         muted={false}                           // Mutes the audio entirely.
         paused={false}                          // Pauses playback entirely.
         resizeMode="contain"                      // Fill the whole screen at aspect ratio.*
         repeat={true}                           // Repeat forever.
         playInBackground={false}                // Audio continues to play when app entering background.
         playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
         progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
         onProgress={ (e) => this.setTime(e) }               // Callback every ~250ms with currentTime
         style={styles.video}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.showSpinner} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        { this.renderVideo() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#000000',
  },
  video: {
    position: 'absolute',
    backgroundColor: '#000000',
    color: '#000000',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
