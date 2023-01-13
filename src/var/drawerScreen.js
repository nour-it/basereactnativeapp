import { Image, StyleSheet, Text, View } from "react-native";
import { ChatsDrawerStacks } from "./stackScreen";
import icon from "./icon";
import font from "./font";


export default {

    drawer: {
        ChatsDrawerScreen: {
            name: "Chats",
            component: ChatsDrawerStacks,
            option: ({ navigation, route }) => ({
                drawerIcon: ({ focused, color, size }) => <Image source={icon.chats["96x96"]} style={styles.icon} />,
                drawerLabel: ({ focused, color }) => <Text style={styles.name}>{route.name}</Text>,
                // <View>
                //     <Image source={icon.chats["96x96"]} style={styles.icon} />
                //     <Text style={styles.name}>{route.name}</Text>
                //     <Text style={styles.name}>{route.name}</Text>
                //     </View>,

                drawerLabelStyle: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
                drawerActiveBackgroundColor: null,
                drawerContentContainerStyle: {

                },
                drawerItemStyle: {
                    marginHorizontal: -5,
                },
                drawerLockMode: "locked-closed"
            })
        },
    }
}

const styles = StyleSheet.create({
    icon: { width: 36, height: 36, resizeMode: "contain", marginLeft: 10 },
    name: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
})
