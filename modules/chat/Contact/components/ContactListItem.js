import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NourTouchable from '../../../../components/core/NourTouchable';
import Contact from '../../../../src/models/Contact';
import { Image } from 'react-native';
import icon from '../../../../src/var/icon';
import { discussionScreenName } from '../../../../src/var/screenName';
import useDate from '../../../../hooks/useDate';
import styles from '../../styles';
import { getCurrentTheme } from '../../../../src/stores/configStore';

function ContactListItem(props) {

  const c = Contact.fromObject(props.item)

  function goToDiscussion() {
    props.navigation.navigate(discussionScreenName, {c})
  }

  const [time, date] = useDate(new Date(c.lastMessageDate))

  const currentTheme = getCurrentTheme();
  const style = styles[currentTheme]

  return (
    <NourTouchable innerStyle={style.contact_list_item_container} onPress={goToDiscussion}>
      <Image source={icon.user['512x512']} style={{ width: 32, height: 32, resizeMode: "contain", marginRight: 10 }} />
      <View>
        <Text style={style.contact_list_item_name}>{c.name || c.number}</Text>
        <Text style={style.contact_list_item_message}>{c.lastMessageContent}</Text>
      </View>
      <Text style={style.contact_list_item_date}>{date} {time}</Text>
    </NourTouchable> 
  )
}

export default React.memo(ContactListItem);