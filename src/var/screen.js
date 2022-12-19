import LoginScreen from "../../modules/auth/screens/LoginScreen";
import RegisterScreen from "../../modules/auth/screens/RegisterScreen";
import ContactScreen from "../../modules/chat/Contact/ContactScreen";
import DiscussionScreen from "../../modules/chat/Discussion/DiscussionScreen";
import {contactScrenName, discussionScreenName, loginScreenName, registerScreenName} from "./screenName"


export default {

    AuthStackScreen: {
        LoginScreen: {
            component: LoginScreen,
            name: loginScreenName,
        },
        RegisterScreen: {
            component: RegisterScreen,
            name: registerScreenName,
        }
    },

    
    ChatStackScreen: {
        ContactScreen: {
            component: ContactScreen,
            name: contactScrenName,
        },
        DiscussionScrenn: {
            component: DiscussionScreen,
            name: discussionScreenName,
        }
    }
}