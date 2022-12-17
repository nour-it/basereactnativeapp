import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import React from "react";

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
    return <View style={outerStyle}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={innerStyle}>
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>;
  }
};

export default NourTouchable;
