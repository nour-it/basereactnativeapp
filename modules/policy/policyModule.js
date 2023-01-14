import { Image, StyleSheet, Text } from "react-native";
import font from "../../src/var/font";
import icon from "../../src/var/icon";
import PrivacyPolicyScreen from "./PrivacyPolicyScreen";

export default function () {
    return {
        name: "Privacy",
        component: PrivacyPolicyScreen,
        option: ({ navigation, route }) => ({
            drawerIcon: ({ focused, color, size }) => <Image source={icon.policy["54x54"]} style={[styles.icon, {width: 24, height: 24, marginLeft: 15, marginRight: 10}]} />,
            drawerLabel: ({ focused, color }) => <Text style={styles.name}>{route.name}</Text>,
           
            drawerLabelStyle: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
            drawerActiveBackgroundColor: null,
            drawerContentContainerStyle: {

            },
            drawerItemStyle: {
                marginHorizontal: -5,
            },
        })
    };
}

const styles = StyleSheet.create({
    icon: { width: 36, height: 36, resizeMode: "contain", marginLeft: 10 },
    name: { color: "#000000", fontSize: 18, fontFamily: font.n_b },
})

