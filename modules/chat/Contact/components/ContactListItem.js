import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NourTouchable from '../../../../components/core/NourTouchable';
import Contact from '../../../../src/models/Contact';
import { Image } from 'react-native';
import icon from '../../../../src/var/icon';
import font from '../../../../src/var/font';
import color from '../../../../src/var/color';
import { discussionScreenName } from '../../../../src/var/screenName';
import useDate from '../../../../hooks/useDate';

function ContactListItem(props) {

  const c = Contact.fromObject(props.item)

  function goToDiscussion() {
    props.navigation.navigate(discussionScreenName, {c})
  }

  const [time, date] = useDate(new Date(c.lastMessageDate))

  return (
    <NourTouchable innerStyle={styles.container} onPress={goToDiscussion}>
      <Image source={icon.user['512x512']} style={{ width: 32, height: 32, resizeMode: "contain", marginRight: 10 }} />
      <View>
        <Text style={styles.name}>{c.name || c.number}</Text>
        <Text style={styles.message}>{c.lastMessageContent}</Text>
      </View>
      <Text style={styles.date}>{date} {time}</Text>
    </NourTouchable> 
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    position: "relative",
  },
  date: {
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
  name: {
    fontSize: 16,
    fontFamily: font.n_b
  },
  message: {
    marginTop: 5,
    fontSize: 13,
    fontFamily: font.n_r,
    color: color.black + "99"
  }
})

export default React.memo(ContactListItem);