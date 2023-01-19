import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatForm from './components/ChatForm';
import { useDispatch } from 'react-redux';
import Message from '../../../src/models/Message';
import { addMessages } from '../../../src/stores/chatStore';
import MessageList from './components/MessageList';
import MediaModal from './components/MediaModal';
import NourScreenView from '../../../components/core/NourScreenView';
import DiscussionHeader from '../../../components/header/DiscussionHeader';

function DiscussionScreen(props) {

  const contact = props.route.params.c;

  const dispatch = useDispatch();

  const [state, setState] = useState({ mediaModalIsOpen: false, })

  const onMessageSend = (m) => {
    let message = Message.fromContact(contact, m);
    dispatch(addMessages(message));
  }

  function toggleModal() {
    setState((state) => ({ ...state, mediaModalIsOpen: !state.mediaModalIsOpen }));
    return true;
  }

  function sendImage (uri) {
    let m = { uri, type: "image" }
    let message = Message.fromContact(contact, m);
    dispatch(addMessages(message));
  }

  return (
    <NourScreenView style={styles.container}>
      <DiscussionHeader {...props} />
      <MessageList {...props} />
      <ChatForm onMessageSend={onMessageSend} onHandleMediaModal={toggleModal} {...props} />
      {state.mediaModalIsOpen && <MediaModal onClose={toggleModal}  onSendImage={sendImage} {...props} />}
    </NourScreenView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  }
})

export default DiscussionScreen;