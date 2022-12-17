import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactService from '../../../src/services/ContactService'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../src/models/Message'

import { addContacts, addMessages } from '../../../src/stores/chatStore'
import contactstyle from './contactstyle'
import ContactList from './components/ContactList'

export default function ContactScreen() {

  const store = useSelector((state) => state.chatStore);
  const dispatch = useDispatch();

  // console.log(store)
  
 
  useEffect(() => {


    (async function() {
      
      /**@type {Message[]} */
      let messages = await ContactService.getMessagesByAxios();
      let contacts = {};
      messages.forEach((val, ind) => {
          contacts[val.toId] = val;
      })
      dispatch(addContacts(JSON.stringify(Object.values(contacts))));
      dispatch(addMessages(JSON.stringify(messages)))
     
    })()
    
  
    return () => {
       
    }
  }, [ ])
  


  return (
    <View style={contactstyle.container}>
      <Text>ContactScreen</Text>
      <ContactList data={store.contacts}/>
    </View>
  )
}

