import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddContactButton from './components/AddContactButton'
import { useState } from 'react'
import ContactForm from './components/ContactForm'
import { addContacts, setContacts } from '../../../src/stores/chatStore'
import ContactList from './components/ContactList'
import NourScreenView from '../../../components/core/NourScreenView'
import { StyleSheet } from 'react-native'
import LogoHeader from '../../../components/header/LogoHeader'
import useSqlite from '../../../hooks/useSqlite'
import useNotification from '../../../hooks/useNotification'

import styles from '../styles'
import { getCurrentTheme } from '../../../src/stores/configStore'
import dimension from '../../../src/var/dimension'
export default function ContactScreen(props) {

  let chatStore = useSelector((state) => state.chatStore);

  const currentTheme = getCurrentTheme();

  const dispatch = useDispatch();

  const [state, setState] = useState({ contactForm: false })

  const [db] = useSqlite();

  const { schedulePushNotification } = useNotification();

  useEffect(() => {
    db.openDatabase();

    return () => {
      db.closeDatabase();
    }
  }, [])


  function toggleContactForm() {
    setState((state) => ({ ...state, contactForm: !state.contactForm }))

  }

  function onSave(contact) {
    /**@type Array */
    const contacts = setContacts(chatStore, [contact])
    dispatch(addContacts(JSON.stringify(contacts)));
    toggleContactForm();
    // // db.insetItem();
    // // db.getItems();
    // schedulePushNotification({title: "Nouveau contact", body: `${contact.name || contact.number} créé avec succès`});
  }

  const style = styles[currentTheme];

  return (
    <NourScreenView  {...props} style={style.container}  >
      <LogoHeader {...props} />
      <ContactList  {...props} data={JSON.parse(chatStore.contacts)} style={{ }} />
      <AddContactButton {...props} onPress={toggleContactForm} />
      {state.contactForm && <ContactForm {...props} onClose={toggleContactForm} onSave={onSave} />}
    </NourScreenView>
  )
}

