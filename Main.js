import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Video from 'react-native-video'

export default class Main extends Component {
  componentDidMount() {
    this.player.seek(0)
  }

  loadStart() {
    console.log('loadStart', arguments)
  }

  setDuration() {
    console.log('setDuration', arguments)
  }

  setTime() {
    console.log('setTime', arguments)
  }

  onEnd() {
    console.log('onEnd', arguments)
  }

  videoError() {
    console.log('videoError', arguments)
  }

  onBuffer() {
    console.log('onBuffer', arguments)
  }

  onTimedMetadata() {
    console.log('onTimedMetadata', arguments)
  }

  render() {
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
         onLoadStart={this.loadStart}            // Callback when video starts to load
         onLoad={this.setDuration}               // Callback when video loads
         onProgress={this.setTime}               // Callback every ~250ms with currentTime
         onEnd={this.onEnd}                      // Callback when playback finishes
         onError={this.videoError}               // Callback when video cannot be loaded
         onBuffer={this.onBuffer}                // Callback when remote video is buffering
         onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
         style={styles.backgroundVideo}
      />
    )
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
