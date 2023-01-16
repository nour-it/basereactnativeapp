
import { Image, StyleSheet, Text } from "react-native";
import font from "../../src/var/font";
import icon from "../../src/var/icon";
import ShareScreen from "./ShareScreen";

export default function () {
	return {
		name: "Share App",
		component: ShareScreen,
		option: ({ navigation, route }) => ({
			drawerIcon: ({ focused, color, size }) => <Image source={icon.ic_share["100x100"]} style={[styles.icon, { width: 30, height: 30, marginLeft: 15, marginRight: 5 }]} />,
			drawerLabel: ({ focused, color }) => <Text style={styles.name}>{route.name}</Text>,

			drawerLabelStyle: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
			drawerActiveBackgroundColor: null,
			drawerContentContainerStyle: {

			},
			drawerItemStyle: {
				marginHorizontal: -5,
			},
		})
	}
}

const styles = StyleSheet.create({
	icon: { width: 36, height: 36, resizeMode: "contain", marginLeft: 10 },
	name: { color: "#000000", fontSize: 18, fontFamily: font.n_b },
})
