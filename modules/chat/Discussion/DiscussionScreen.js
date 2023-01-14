import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatForm from './components/ChatForm';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../../src/models/Message';
import { addMessages } from '../../../src/stores/chatStore';
import MessageList from './components/MessageList';
import MediaModal from './components/MediaModal';
import { BackHandler } from 'react-native';

function DiscussionScreen(props) {

  const contact = props.route.params.c;

  const dispatch = useDispatch();


  const [state, setState] = useState({ mounted: false, mediaModalIsOpen: false,})

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true, }))

    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return
  console.log(state);



  const onMessageSend = (m) => {
    let message = Message.fromContact(contact, m);
    
    dispatch(addMessages(m));
  }

  function toggleModal() {
    setState((state) => ({ ...state, mediaModalIsOpen: !state.mediaModalIsOpen }));
    return true;
  }

  return (
    <View style={styles.container}>
      {state.mediaModalIsOpen && <MediaModal onClose={toggleModal} />}
      <MessageList/>
      <ChatForm onMessageSend={onMessageSend} onHandleMediaModal={toggleModal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    // position: 'relative',
    // height: '100%'
  }
})

export default DiscussionScreen;