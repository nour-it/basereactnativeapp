import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import dimension from '../../../../src/var/dimension'
import { Image } from 'react-native'
import icon from '../../../../src/var/icon'
import NourInput from '../../../../components/core/NourInput'
import color from '../../../../src/var/color'
import font from '../../../../src/var/font'
import NourTouchable from '../../../../components/core/NourTouchable'
import useAudio from '../../../../hooks/useAudio'


const ChatForm = ({ onMessageSend, onHandleMediaModal }) => {

  const [state, setState] = useState({
    mounted: false,
    message: null,
    recording: null
  });

  const {recorder} = useAudio();

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }));

    return () => {
      setState((state) => ({ ...state, mounted: false }));
    };
  }, []);

  if (!state.mounted) return;

  const updateMessage = (label, value) => setState((state) => ({ ...state, [label]: {type: 'text', content: value} }));

  const sendMessage = () => {
    const message = state.message;
    setState((state) => ({ ...state, message: null }));
    let timer = setTimeout(() => {
      onMessageSend(message)
      // Keyboard.dismiss()
      clearTimeout(timer)
    }, 50)
  }

  const recordVoice = async () => {
    if (recorder.recording) {
      await recorder.stopRecording()
      console.log(recorder);
      const message = {type: "voice", uri: recorder.uri};
      setState((state) => ({ ...state, recording: false, message: null }))
      let timer = setTimeout(() => {
        onMessageSend(message)
        // Keyboard.dismiss()
        clearTimeout(timer)
      }, 50)
    } else {
      await recorder.startRecording()
      setState((state) => ({ ...state, recording: true }))
    }
  }

  return (
    <View style={styles.container}>
      <NourTouchable onPress={onHandleMediaModal}>
        <Image source={icon.explorer['162x213']} style={{ width: 32, height: 32, resizeMode: "stretch", }} />
      </NourTouchable>
      <NourInput fieldStyle={styles.field} inputStyle={styles.input} placeholder={"Tape your message."} updateValue={updateMessage} label={"message"} multiline={true} value={state.message?.content} />
      <NourTouchable outerStyle={{ borderRadius: 15, overflow: "hidden" }} onPress={state.message ? sendMessage : recordVoice}>
        {state.message ?
          (<Image source={icon.send['96x96']} style={{ width: 32, height: 32, resizeMode: "contain", }} />) :
          (<Image source={state.recording ? icon.stop['512x512'] : icon.voice['512x512']} style={{ width: 32, height: 32, resizeMode: "contain", }} />)}

      </NourTouchable>
    </View>

  )
}

export default ChatForm

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#00000009",
    flex: 1,
    position: 'absolute',
    width: dimension.window.width,
    bottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    // marginBottom: 10,
    paddingVertical: 5,
    // marginTop: -100,
    // top: dimension.window.height - 100,
  },
  field: {
    flex: 1,
    backgroundColor: color.black + "22",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: font.n_sb,
    fontSize: 14,
    minHeight: 15,
    maxHeight: 60,
  }
})