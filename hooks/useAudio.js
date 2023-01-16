import { Audio } from "expo-av";
import { useState } from "react";

class Recorder {

  constructor() {
    this.recording = null;
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
      Alert.alert('Failed to start recording ' + err);
    }
    return this
  }

  async stopRecording() {
    console.log('Stopping recording..');
    await this.recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({ allowsRecordingIOS: false, });
    const uri = this.recording.getURI();
    this.recording = null;
    console.log('Recording stopped and stored at', uri);
    return this
  }
}

export default function useAudio() {

  const [recorder, setRecorder] = useState(new Recorder())

  return [recorder];
}