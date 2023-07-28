import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { DARK, LIGHT, getCurrentTheme } from "../../src/stores/configStore";
import color from "../../src/var/color";

const NourTouchable = ({ children, onPress, outerStyle, innerStyle }) => {
  if (Platform.OS == "ios") {
    return <View style={outerStyle}>
      <TouchableOpacity onPress={onPress}>
        <View style={innerStyle}>
          {children}
        </View>
      </TouchableOpacity>
    </View>;
  }
  if (Platform.OS == "android") {
    const style = styles[getCurrentTheme()];
    return <View style={outerStyle}>
      <TouchableRipple onPress={onPress} rippleColor={style} >
        <View style={innerStyle}>
          {children}
        </View>
      </TouchableRipple>
    </View>;
  }
};

const styles = {
  [`${LIGHT}`]: color.black + "19",
  [`${DARK}`]: color.white + "19",
}

export default NourTouchable;
