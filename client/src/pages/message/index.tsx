import React from 'react'
import MessageList from 'components/MessageList'
import MessageForm from 'components/MessageForm'
import { GRPCClients } from 'gRPCClients'
import { useMessages } from 'hooks/useMessages'
import { useMessageForm } from 'hooks/useMessageForm'

type Props = {
  clients: GRPCClients
}

const MessagePage: React.FC<Props> = ({ clients }) => {
  const messengerClient = clients.messengerClient
  const messagesState = useMessages(messengerClient)
  const messageFormState = useMessageForm(messengerClient)
  return (
    <div>
      <MessageForm {...messageFormState} />
      <MessageList {...messagesState} />
    </div>
  )
}

export default MessagePage
