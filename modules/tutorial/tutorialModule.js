import { Image, StyleSheet, Text } from "react-native";
import font from "../../src/var/font";
import icon from "../../src/var/icon";
import HelpScreen from "./HelpScreen";

export default function () {
    return {
        name: "Help",
        component: HelpScreen,
        option: ({ navigation, route }) => ({
            drawerIcon: ({ focused, color, size }) => <Image source={icon.help["54x54"]} style={[styles.icon, {width: 24, height: 24, marginLeft: 15, marginRight: 10}]} />,
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

