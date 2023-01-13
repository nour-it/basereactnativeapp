import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatForm from './components/ChatForm';
import { useDispatch, useSelector } from 'react-redux';
import NourFlatList from '../../../components/core/NourFlatList';
import Message from '../../../src/models/Message';

function DiscussionScreen(props) {

  const contact = props.route.params.c;

  const store = useSelector((state) => state.chatStore);
  const dispatch = useDispatch();


  const [state, setState] = useState({ mounted: false})
  useEffect(() => {
      setState((state) => ({ ...state, mounted: true }))
      return () => {
          setState((state) => ({ ...state, mounted: false }))
      }
  }, [])

  if (!state.mounted) return

  const onMessageSend = (m) => {

    let message = Message.fromContact(contact, m);

  }

  return (
    <View style={styles.container}>
      <NourFlatList data={store.chats}/>
      <ChatForm onMessageSend={onMessageSend}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    position: 'relative'
  }
})

export default DiscussionScreen;