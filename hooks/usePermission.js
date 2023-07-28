import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

async function initPermissions() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('notification', 'Failed to get push token for push notification!');
      return;
    }
  } else {
    Alert.alert('notification', 'Must use physical device for Push Notifications');
  }



  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === 'granted') {
    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();

  }
}

async function useMediaLibrairyPermission() {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  if(!status?.granted) {
    const result = await requestPermission()
    console.log(result)
  }
  return status
}

export default function usePermission() {
  return {
    useMediaLibrairyPermission
  }
}