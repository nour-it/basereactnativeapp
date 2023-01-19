import { Audio } from "expo-av";
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
  }

  async load(uri) {
    this.uri = uri;

    const { sound } = await new Audio.Sound.createAsync({ uri: this.uri }, { shouldPlay: false });
    this.sound = sound

  }

  async paly() {
    const statu = await this.sound.getStatusAsync()
    statu.positionMillis == statu.playableDurationMillis ? this.sound.replayAsync() : this.sound.playAsync();
  }

  async pause() {
    this.sound.pauseAsync()
  }

  async unload() {
    this.sound.unloadAsync()
  }
}

export default function useAudio() {

  const [recorder, setRecorder] = useState(new NourRecorder())

  const [sound, setSound] = useState(new NourSound())

  return { recorder, sound };
}