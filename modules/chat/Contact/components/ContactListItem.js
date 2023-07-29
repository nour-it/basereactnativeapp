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
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, setContacts } from '../../../../src/stores/chatStore';

function ContactListItem(props) {

  const c = Contact.fromObject(props.item)

  const selected = c.selected

  const chatStore = useSelector(state => state.chatStore)

  const dispatch = useDispatch();

  function goToDiscussion() {
    if (props.selectMode) {
      handleLongPress();
      return;
    }
    props.navigation.navigate(discussionScreenName, { c })
  }

  const [time, date] = useDate(new Date(c.lastMessageDate))

  const currentTheme = getCurrentTheme();
  const style = styles[currentTheme]

  const handleLongPress = () => {
    c.selected = !selected;
    const contacts = JSON.parse(chatStore.contacts)
                        .filter( (oldContact, i) => c.id != oldContact.id )
    contacts.push(c)
    // const contacts = setContacts(chatStore, [c])
    dispatch(addContacts(JSON.stringify(contacts)));
  }



  return (
    <NourTouchable innerStyle={style.contact_list_item_container} onPress={goToDiscussion} longPress={handleLongPress}>
      {c.selected && <Image source={icon.selected["100x100"]} style={{ width: 32, height: 32, resizeMode: "contain", marginRight: 10 }} />}
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