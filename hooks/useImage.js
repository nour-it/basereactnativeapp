import * as ImagePicker from 'expo-image-picker';

async function chooseImage() {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });


  if (!result.cancelled && result.type == "image") {
    return result.uri;
  }

  return null
}

async function chooseVideo() {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });


  if (!result.cancelled && result.type == "video") {
    return result.uri;
  }

  return null
}

export default function useImage() {
  return {
    chooseImage,
    chooseVideo
  }
} 