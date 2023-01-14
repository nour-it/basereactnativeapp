import { Image, StyleSheet, Text } from "react-native";
import font from "../../src/var/font";
import icon from "../../src/var/icon";
import ContactScreen from "./Contact/ContactScreen";
import { contactScrenName, discussionScreenName } from "../../src/var/screenName";
import DiscussionScreen from "./Discussion/DiscussionScreen";

import NourStackNavigation from "../../components/Navigation/NourStackNavigation";

function ChatsDrawerStacks() {
    const stacks = {
        ContactScreen: {
            component: ContactScreen,
            name: contactScrenName,
        },
        DiscussionScrenn: {
            component: DiscussionScreen,
            name: discussionScreenName,
        }
    }
    return (
        <NourStackNavigation stacks={stacks} />
    )
}


export default function () {
    return {
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
    }
}

const styles = StyleSheet.create({
    icon: { width: 36, height: 36, resizeMode: "contain", marginLeft: 10 },
    name: { color: "#000000", fontSize: 18, fontFamily: font.n_b },
})

