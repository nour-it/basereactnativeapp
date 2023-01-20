import { Audio, AVPlaybackStatus } from "expo-av";
import { useState } from "react";

import { Sound as AudioSound } from "expo-av/build/Audio";

class NourRecorder {

  constructor() {
    this.recording = null;
    this.uri = "";
  }

  async startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      this.recording = recording
      console.log('Recording started');
    } catch (err) {
      // Alert.alert('Failed to start recording ' + err);
    }
    return this
  }

  async stopRecording() {
    console.log('Stopping recording..');
    await this.recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({ allowsRecordingIOS: false, });
    this.uri = this.recording.getURI();
    this.recording = null;
    console.log('Recording stopped and stored at', this.uri);
    return this
  }
}

class NourSound {

  constructor() {
    this.uri = ""
    /**@type {AudioSound} */
    this.sound = null
    /**@type {AVPlaybackStatus} */
    this.statu = null
    this.events = [];
  }

  async load(uri) {
    this.uri = uri;
    const { sound } = await new Audio.Sound.createAsync({ uri: this.uri }, { shouldPlay: false });
    this.sound = sound
    this.statu = await this.sound.getStatusAsync()
    this.sound.setOnPlaybackStatusUpdate(this.update.bind(this))
  }

  async update (statu) {
    this.statu = await this.sound.getStatusAsync()
    if (this.isFinishPlaying()) {
      this.emitEvent()
      this.sound.setOnPlaybackStatusUpdate(null)
    } 
  }

  async paly() {
    if (this.isFinishPlaying()) {
      await this.sound.replayAsync()
      this.sound.setOnPlaybackStatusUpdate(this.update.bind(this))
    } else {
      await this.sound.playAsync();
    }  
  }

  async pause() {
    await this.sound.pauseAsync()
  }

  async unload() {
    this.sound.setOnPlaybackStatusUpdate(null)
    await this.sound.unloadAsync()
  }

  async onFinishPlaying (callBack, params) {
    this.events.push({callBack, params})
  }

  async emitEvent () {
    this.events.forEach(e => e.callBack(e.params))
  }

  isFinishPlaying () {
    return this.statu.positionMillis == this.statu.playableDurationMillis
  }
}

export default function useAudio() {

  const [recorder, setRecorder] = useState(new NourRecorder())

  const [sound, setSound] = useState(new NourSound())

  return { recorder, sound };
}