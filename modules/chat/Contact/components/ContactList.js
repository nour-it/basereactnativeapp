import React from 'react'
import { FlatList } from 'react-native'
import ContactListItem from './ContactListItem'
import NourFlatList from '../../../../components/core/NourFlatList'

export default function ContactList(props) {
  
  const data = props.data.sort((b, a) => a.lastMessageDate -b.lastMessageDate)

  return (
    <NourFlatList
      data={data}
      listItem={({item}) => <ContactListItem item={item} {...{...props, data: null}}/>}
    />
  )
}
