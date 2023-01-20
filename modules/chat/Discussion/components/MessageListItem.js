import React, { } from 'react'
import TextMessage from './message/TextMessage'
import VoiceMessage from './message/VoiceMessage'
import ImageMessage from './message/ImageMessage'
import VideoMessage from './message/VideoMessage'
import DocumentMessage from './message/DocumentMessage'

const MessageListItem = (props) => {

  const { item: message } = props

  switch (message.type) {
    case ("text"):
      return <TextMessage message={message} />
    case ("voice"):
      return <VoiceMessage message={message} />
    case ("image"):
      return <ImageMessage message={message} />
    case ("video"):
      return <VideoMessage message={message} />
    case ("document"):
      return <DocumentMessage message={message} />
    default:
      return null
  }
}

export default React.memo(MessageListItem)
