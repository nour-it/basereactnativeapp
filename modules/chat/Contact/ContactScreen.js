import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddContactButton from './components/AddContactButton'
import { useState } from 'react'
import ContactForm from './components/ContactForm'
import { addContacts } from '../../../src/stores/chatStore'
import ContactList from './components/ContactList'
import NourScreenView from '../../../components/core/NourScreenView'
import { StyleSheet } from 'react-native'
import LogoHeader from '../../../components/header/LogoHeader'
import useSqlite from '../../../hooks/useSqlite'
import useNotification from '../../../hooks/useNotification'

export default function ContactScreen(props) {

  const store = useSelector((state) => state.chatStore);
  const dispatch = useDispatch();

  const [state, setState] = useState({ contactForm: false })

  const [db] = useSqlite();

  const {schedulePushNotification} = useNotification();

  useEffect(() => {
    db.openDatabase();

    return () => {
      db.closeDatabase();
    }
  }, [])


  function toggleContactForm() {
    setState((state) => ({ ...state, contactForm: !state.contactForm }))
    state.contactForm && schedulePushNotification();
  }

  function onSave(contact) {
    /**@type Array */
    const contacts = JSON.parse(store.contacts);
    if (contacts.find((c, i) => c.number == contact.number)) return
    contacts.push(contact)
    dispatch(addContacts(JSON.stringify(contacts)));
    toggleContactForm();
    db.getItems();
  }



  return (
    <NourScreenView style={styles.container} {...props} >
      <LogoHeader {...props} />
      <ContactList data={JSON.parse(store.contacts)} {...props} />
      <AddContactButton onPress={toggleContactForm} {...props} />
      {state.contactForm && <ContactForm onClose={toggleContactForm} onSave={onSave} {...props} />}
    </NourScreenView>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    position: 'relative'
  }

})