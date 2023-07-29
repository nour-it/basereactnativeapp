import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import icon from '../../../../src/var/icon'
import NourInput from '../../../../components/core/NourInput'
import NourTouchable from '../../../../components/core/NourTouchable'
import useAudio from '../../../../hooks/useAudio'
import { getCurrentTheme } from '../../../../src/stores/configStore'
import styles from "../../styles"

const ChatForm = ({ onMessageSend, onHandleMediaModal }) => {

  const [state, setState] = useState({
    mounted: false,
    message: null,
    recording: null
  });

  const style = styles[getCurrentTheme()];

  const { recorder } = useAudio();

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }));

    return () => {
      setState((state) => ({ ...state, mounted: false }));
    };
  }, []);

  if (!state.mounted) return;

  const updateMessage = (label, value) => setState((state) => ({ ...state, [label]: { type: 'text', content: value } }));

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
      const message = { type: "voice", uri: recorder.uri };
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
    <View style={[style.container, style.discussion_container]}>
      <NourTouchable onPress={onHandleMediaModal} outerStyle={style.discussion_touchable}>
        <Image source={icon.explorer['162x213']} style={style.discussion_icon} />
      </NourTouchable>
      <NourInput 
        fieldStyle={style.discussion_field} 
        inputStyle={style.discussion_input} 
        placeholder={"Tape your message."} 
        updateValue={updateMessage} 
        label={"message"} 
        multiline={true} 
        value={state.message?.content} />
      <NourTouchable outerStyle={style.discussion_touchable} onPress={state.message ? sendMessage : recordVoice}>
        {state.message ?
          (<Image source={icon.send['96x96']} style={style.discussion_icon} />) :
          (<Image source={state.recording ? icon.stop['512x512'] : icon.voice['512x512']} style={style.discussion_icon} />)}
      </NourTouchable>
    </View>

  )
}

export default ChatForm

