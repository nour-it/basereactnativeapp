import * as ImagePicker from 'expo-image-picker';

async function chooseImage() {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled && result.type == "image") {
    return result.uri;
  }

  return null
}

export default function useImage() {
  return {
    chooseImage
  }
} 