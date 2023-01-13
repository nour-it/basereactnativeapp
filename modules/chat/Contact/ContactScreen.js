import { Image, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import contactstyle from './contactstyle'
import AddContactButton from './components/AddContactButton'
import { useState } from 'react'
import ContactForm from './components/ContactForm'
import { addContacts } from '../../../src/stores/chatStore'
import ContactList from './components/ContactList'

export default function ContactScreen(props) {

  const store = useSelector((state) => state.chatStore);
  const dispatch = useDispatch();
  
  const [state, setState] = useState({ mounted: false, contactForm: false })
  useEffect(() => {
    
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])
  if (!state.mounted) return

  function showContactForm() {
    setState((state) => ({ ...state, contactForm: true }))
  }

  function hideContactForm() {
    setState((state) => ({ ...state, contactForm: false }))
  }

  function onSave (contact) {
    /**@type Array */
    const contacts = JSON.parse(store.contacts);
    if (contacts.find((c, i) => c.number == contact.number)) return
    contacts.push(contact)
    dispatch(addContacts(JSON.stringify(contacts)));
    hideContactForm();
  }

  return (
    <View style={contactstyle.container}>
      <ContactList data={JSON.parse(store.contacts)} {...props}/>
      <AddContactButton onPress={showContactForm} />
      {state.contactForm && <ContactForm onClose={hideContactForm} onSave={onSave}/>}
    </View>
  )
}

