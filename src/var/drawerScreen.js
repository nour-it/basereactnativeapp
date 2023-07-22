import chatModule from "../../modules/chat/chatModule";
import policyModule from "../../modules/policy/policyModule";
import settingModule from "../../modules/settings/settingModule";
import tutorialModule from "../../modules/tutorial/tutorialModule";
import shareModule from "../../modules/share/shareModule";
import feedBackModule from "../../modules/feedback/feedBackModule";

export default {
  drawer: {
    TutorialDrawerScreen: tutorialModule(),
    SettingDrawerScreen: settingModule(),
    ChatsDrawerScreen: chatModule(),
    PrivacyDrawerScreen: policyModule(),
    FeedBackDrawerScreen: feedBackModule(),
    ShareDrawerScreen: shareModule(),
  }
}


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


