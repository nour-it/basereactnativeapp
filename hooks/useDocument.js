import * as DocumentPicker from 'expo-document-picker';

async function chooseDocument() {
  const result = await DocumentPicker.getDocumentAsync({
    copyToCacheDirectory: false,
    multiple: true,
    // type: "*/*"
  });

  if (result.type == "success") {
    return result.uri;
  }
  return null;
}

export default function useDocument() {
  return {
    chooseDocument
  }
}