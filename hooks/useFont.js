import { useFonts } from "expo-font";


export default function useFont () {
  const [fontsLoaded] = useFonts({
    "n_b": require("../assets/fonts/n_b.ttf"),
    "n_sb": require("../assets/fonts/n_sb.ttf"),
    "n_r": require("../assets/fonts/n_r.ttf"),
  });
  return {
    fontsLoaded
  }
}