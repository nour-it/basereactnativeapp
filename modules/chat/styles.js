import { StyleSheet } from "react-native";
import { DARK, LIGHT } from "../../src/stores/configStore";
import font from "../../src/var/font";
import color from "../../src/var/color";

const light = StyleSheet.create({
  // DiscussionScreen
  container: {
    backgroundColor: "#FFFFFFFF"
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
  }
})

const dark = StyleSheet.create({
  // DiscussionScreen
  container: {
    backgroundColor: color.black
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
  }
})

export default {
  // light theme
  [LIGHT]: light,

  // dark theme
  [DARK]: dark
}