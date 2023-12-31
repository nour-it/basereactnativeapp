import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import NourTouchable from '../../../../../components/core/NourTouchable'
import useAudio from '../../../../../hooks/useAudio'
import lottie from '../../../../../src/var/lottie'
import LottieView from 'lottie-react-native';
import color from '../../../../../src/var/color'
import font from '../../../../../src/var/font'



const VoiceMessage = ({message}) => {

  const { sound } = useAudio();

  const [state, setState] = useState({ isPlaying: false })
  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);

  useEffect(() => {
    sound.load(message.file)
    sound.onFinishPlaying((animations) => animations.forEach(a => a.current.reset()), [animation1, animation2, animation3, animation4])
    sound.onFinishPlaying(() => setState((state) => ({...state, isPlaying: false})))
    return () => {
      sound.unload()
    }
  }, [])

  function toggleplayingSound() {
    if (state.isPlaying) {
      animation1.current.reset();
      animation2.current.reset();
      animation3.current.reset();
      animation4.current.reset();
      sound.pause();
    } else {
      animation1.current.play();
      animation2.current.play();
      animation3.current.play();
      animation4.current.play();
      sound.paly();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }))
  }

  // console.log(sound.statu?.isPlaying);

  return (
    <NourTouchable innerStyle={[styles.row]} onPress={toggleplayingSound}>
      <View style={[styles.content, { flexDirection: "row", paddingRight: 20, justifyContent: "center", alignItems: "center" }]}>
        <LottieView ref={animation1} style={{ width: 45, height: 40, }} source={lottie.soundPlaying} />
        <LottieView ref={animation2} style={{ width: 45, height: 40, }} source={lottie.soundPlaying} />
        <LottieView ref={animation3} style={{ width: 45, height: 40, }} source={lottie.soundPlaying} />
        <LottieView ref={animation4} style={{ width: 45, height: 40, }} source={lottie.soundPlaying} />
        <Text style={[styles.date]}>12:20</Text>
      </View>
      <View style={[styles.border]} />
    </NourTouchable>
  )

}


export default VoiceMessage

const styles = StyleSheet.create({
  row: {
    marginVertical: 5,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  content: {
    position: "relative",
    paddingVertical: 4,
    paddingHorizontal: 9,
    paddingBottom: 20,
    backgroundColor: color.primary,
    borderRadius: 10,
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
  message: {
    fontFamily: font.n_r,
    fontSize: 16,
    color: color.white,
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
  }
})