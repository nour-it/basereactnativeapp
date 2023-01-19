import React, {  } from 'react'
import TextMessage from './message/TextMessage'
import VoiceMessage from './message/VoiceMessage'
import ImageMessage from './message/ImageMessage'

const MessageListItem = (props) => {

  const { item: message } = props

  switch (message.type) {
    case ("text"):
      return <TextMessage message={message} />
    case ("voice"):
      return <VoiceMessage message={message} />
    case ("image"):
      return <ImageMessage message={message} />
    default:
      return null
  }
}

export default React.memo(MessageListItem)
