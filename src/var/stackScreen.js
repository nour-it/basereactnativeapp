

import NourStackNavigation from "../../components/Navigation/NourStackNavigation";
import ContactScreen from "../../modules/chat/Contact/ContactScreen";
import DiscussionScreen from "../../modules/chat/Discussion/DiscussionScreen";

import { contactScrenName, discussionScreenName, loginScreenName, registerScreenName } from "./screenName"


export function ChatsDrawerStacks() {
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