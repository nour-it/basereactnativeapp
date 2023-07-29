import { StyleSheet } from "react-native";
import { DARK, LIGHT } from "../../src/stores/configStore";
import font from "../../src/var/font";
import color from "../../src/var/color";
import dimension from "../../src/var/dimension";

const light = StyleSheet.create({

 
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomColor: color.black + "10",
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: font.n_b,
    fontSize: 24,
    color: color.black + "99"
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    transform: [{ rotate: `180deg` }],
    tintColor: color.primary,
  },
  innerStyle: {
		width: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	outerStyle: {
		overflow: "hidden",
		position: "absolute",
		borderRadius: 20,
    marginLeft: 10
	},
  home_logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
})

const dark = StyleSheet.create({
  container: {
    ...light.container,
    backgroundColor: color.black
  },
  text: {
    ...light.text,
    color: color.white
  },
  logo: {
    ...light.logo
  },
  innerStyle: {
    ...light.innerStyle
	},
	outerStyle: {
    ...light.outerStyle
	},
})

export default {
  // light theme
  [LIGHT]: light,

  // dark theme
  [DARK]: dark
}