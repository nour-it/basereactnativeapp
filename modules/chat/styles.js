import { StyleSheet } from "react-native";
import { DARK, LIGHT } from "../../src/stores/configStore";
import font from "../../src/var/font";
import color from "../../src/var/color";
import dimension from "../../src/var/dimension";

const light = StyleSheet.create({
  // Contact
  container: {
    backgroundColor: "#FFFFFFFF",
    flex: 1,
  },
  // ContactListItem
  contact_list_item_container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    position: "relative",
  },
  contact_list_item_date: {
    position: "absolute",
    right: 10,
    top: 10,
    fontFamily: font.n_r,
    fontSize: 12,
    color: color.black + "88",
    // borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: color.primary + "88"
  },
  contact_list_item_name: {
    fontSize: 16,
    fontFamily: font.n_b
  },
  contact_list_item_message: {
    marginTop: 5,
    fontSize: 13,
    fontFamily: font.n_r,
    color: color.black + "99"
  },

  // Discussion
  discussion_container: {
    flexDirection: "row",
    backgroundColor: color.black + "09",
    position: 'absolute',
    width: dimension.window.width,
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    // marginBottom: 10,
    paddingVertical: 10,
  },
  discussion_field: {
    flex: 1,
    backgroundColor: color.black + "22",
    marginHorizontal: 10,
    borderRadius: 20,
    width: "80%",
  },
  discussion_input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: font.n_sb,
    fontSize: 14,
    minHeight: 15,
    maxHeight: 60,
    color: color.white,
  },
  discussion_touchable:{ 
    borderRadius: 15, 
    overflow: "hidden" 
  },
  discussion_icon: { 
    width: 32, 
    height: 32, 
    resizeMode: "contain", 
  }

})

const dark = StyleSheet.create({
  // DiscussionScreen
  container: {
    ...light.container,
    backgroundColor: color.black,
  },
  // ContactListItem
  contact_list_item_container: {
    ...light.contact_list_item_container,
  },
  contact_list_item_date: {
    ...light.contact_list_item_date,
    color: color.white + "88",
    borderColor: color.primary + "88"
  },
  contact_list_item_name: {
    ...light.contact_list_item_name,
    color: color.white + "88",
  },
  contact_list_item_message: {
    ...light.contact_list_item_message,
    color: color.white + "88",
  },
  
  // Discussion
  discussion_container: {
    ...light.discussion_container,
    backgroundColor: color.white + "39",
  },
  discussion_field: {
    ...light.discussion_field,
    backgroundColor: color.white + "22",
  },
  discussion_input: {
    ...light.discussion_input,
    color: color.white,
  },
  discussion_touchable:{ 
    ...light.discussion_touchable 
  },
  discussion_icon: { 
    ...light.discussion_icon
  }
})

export default {
  // light theme
  [LIGHT]: light,

  // dark theme
  [DARK]: dark
}