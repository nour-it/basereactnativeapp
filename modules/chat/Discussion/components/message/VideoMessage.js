import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../../../src/var/color'
import font from '../../../../../src/var/font'
import { Video } from 'expo-av'
import { useRef } from 'react'
import { useState } from 'react'
import NourTouchable from '../../../../../components/core/NourTouchable'
import icon from '../../../../../src/var/icon'

const VideoMessage = ({ message }) => {

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const playVideo = () => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()

  return (
    <View style={[styles.row]}>
      <View style={[styles.content]}>
        <NourTouchable innerStyle={styles.buttons} outerStyle={[styles.buttons, { borderRadius: 10, overflow: 'hidden', top: 6, left: 6 }]} onPress={playVideo}>
          <Image source={icon.play['240x240']} style={[styles.icon, status.isPlaying ? styles.hide : {}]} title={status.isPlaying ? 'Pause' : 'Play'} onPress={playVideo} />
        </NourTouchable>
        <Video ref={video} style={styles.image} resizeMode={"cover"} source={{ uri: message.file, }} onPlaybackStatusUpdate={status => setStatus(() => status)} />
        <Text style={[styles.date]}>12:20</Text>
      </View>
      <View style={[styles.border]} />
    </View>
  )
}

export default VideoMessage

const styles = StyleSheet.create({
  row: {
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 80,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  content: {
    position: "relative",
    paddingVertical: 6,
    paddingHorizontal: 6,
    paddingBottom: 20,
    backgroundColor: color.primary,
    borderRadius: 12,
    borderTopRightRadius: 0,
    minWidth: 70
  },
  border: {
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: color.primary,
    borderTopColor: color.primary,
    width: 10,
    height: 10,
    borderTopRightRadius: 0,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    zIndex: 5,
  },
  date: {
    fontFamily: font.n_r,
    fontSize: 12,
    color: color.white + '90',
    marginTop: 10,
    textAlign: "right",
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  buttons: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    zIndex: 10,
  },
  icon: {
    width: 96,
    height: 96,
    marginTop: 20,
    resizeMode: "contain",
  },
  hide: {
    opacity: 0,
  }
})