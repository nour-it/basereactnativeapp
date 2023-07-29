import { BackHandler, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatForm from './components/ChatForm';
import { useDispatch } from 'react-redux';
import Message from '../../../src/models/Message';
import { addMessages } from '../../../src/stores/chatStore';
import MessageList from './components/MessageList';
import MediaModal from './components/MediaModal';
import NourScreenView from '../../../components/core/NourScreenView';
import DiscussionHeader from '../../../components/header/DiscussionHeader';
import { getCurrentTheme, toggleTabBar } from '../../../src/stores/configStore';
import styles from '../styles';

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

  function sendImage(uri) {
    let m = { uri, type: "image" }
    let message = Message.fromContact(contact, m);
    dispatch(addMessages(message));
  }

  function sendVideo(uri) {
    let m = { uri, type: "video" }
    let message = Message.fromContact(contact, m);
    dispatch(addMessages(message));
  }

  function sendDocument(uri) {
    let m = { uri, type: "document" }
    let message = Message.fromContact(contact, m);
    dispatch(addMessages(message));
  }

  // function backPress() {
  //   if (props.navigation.canGoBack()) {
  //     dispatch(toggleTabBar())
  //     props.navigation.goBack()
  //   }
  // }

  useEffect(() => {
    dispatch(toggleTabBar())
    // BackHandler.addEventListener('hardwareBackPress', backPress);
    return () => {
       
    }
  }, [ ])
  
  const style = styles[getCurrentTheme()];
  
  return (
    <NourScreenView {...props} style={style.container} >
      <DiscussionHeader {...props}  />
      <MessageList {...props}  />
      <ChatForm {...props} onMessageSend={onMessageSend} onHandleMediaModal={toggleModal}  />
      {state.mediaModalIsOpen && <MediaModal {...props} onClose={toggleModal} onSendImage={sendImage} onSendVideo={sendVideo} onSendDocument={sendDocument} />}
    </NourScreenView>
  )
}


export default DiscussionScreen;