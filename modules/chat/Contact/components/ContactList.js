import React from 'react'
import { FlatList } from 'react-native'
import ContactListItem from './ContactListItem'
import NourFlatList from '../../../../components/core/NourFlatList'
import { Text } from 'react-native'

export default function ContactList(props) {
  
  const data = props.data.sort((b, a) => a.lastMessageDate -b.lastMessageDate)
  const selectMode = data.find(c => c.selected) ? true : false

  return (
    <NourFlatList
      {...props}
      data={data}
      listItem={({item}) => <ContactListItem item={item} {...{...props, data: null}} selectMode={selectMode}/>}
      onEmptyData={() => <Text>Pas encore de contact</Text>}
    />
  )
}
