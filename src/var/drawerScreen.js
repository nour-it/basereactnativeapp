import { Image, StyleSheet, Text, View } from "react-native";
import { ChatsDrawerStacks } from "./stackScreen";
import icon from "./icon";
import font from "./font";
import PrivacyPolicyScreen from "../../modules/policy/PrivacyPolicyScreen";
import SettingScreen from "../../modules/settings/SettingScreen";
import HelpScreen from "../../modules/tutorial/HelpScreen";


export default {

    drawer: {
        ChatsDrawerScreen: {
            name: "Chats",
            component: ChatsDrawerStacks,
            option: ({ navigation, route }) => ({
                drawerIcon: ({ focused, color, size }) => <Image source={icon.chats["96x96"]} style={[styles.icon]} />,
                drawerLabel: ({ focused, color }) => <Text style={styles.name}>{route.name}</Text>,
               
                drawerLabelStyle: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
                drawerActiveBackgroundColor: null,
                drawerContentContainerStyle: {

                },
                drawerItemStyle: {
                    marginHorizontal: -5,
                },
            })
        },

        PrivacyDrawerScreen: {
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
        },

        SettingDrawerScreen: {
            name: "Setting",
            component: SettingScreen,
            option: ({ navigation, route }) => ({
                drawerIcon: ({ focused, color, size }) => <Image source={icon.settings["54x54"]} style={[styles.icon, {width: 24, height: 24, marginLeft: 15, marginRight: 10}]} />,
                drawerLabel: ({ focused, color }) => <Text style={styles.name}>{route.name}</Text>,
               
                drawerLabelStyle: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
                drawerActiveBackgroundColor: null,
                drawerContentContainerStyle: {

                },
                drawerItemStyle: {
                    marginHorizontal: -5,
                },
            })
        },

        TutorialDrawerScreen: {
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
        },
    }
}

const styles = StyleSheet.create({
    icon: { width: 36, height: 36, resizeMode: "contain", marginLeft: 10 },
    name: { color: "#000000", fontSize: 18, fontFamily: font.n_b },
})


// export default {

//     drawer: {
//         ChatsDrawerScreen: {
//             name: "Chats",
//             component: ChatsDrawerStacks,
//             option: ({ navigation, route }) => ({
//                 drawerIcon: ({ focused, color, size }) => <Image source={icon.chats["96x96"]} style={styles.icon} />,
//                 drawerLabel: ({ focused, color }) => <Text style={styles.name}>{route.name}</Text>,
//                 // <View>
//                 //     <Image source={icon.chats["96x96"]} style={styles.icon} />
//                 //     <Text style={styles.name}>{route.name}</Text>
//                 //     <Text style={styles.name}>{route.name}</Text>
//                 //     </View>,

//                 drawerLabelStyle: { color: "#000000", fontSize: 24, fontFamily: font.n_b },
//                 drawerActiveBackgroundColor: null,
//                 drawerContentContainerStyle: {

//                 },
//                 drawerItemStyle: {
//                     marginHorizontal: -5,
//                 },
//             })
//         },
//     }
// }


