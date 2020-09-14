import React from 'react'

type Props = {
  messages: string[]
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <div>
      {messages.map((m) => (
        <div key={m}>{m}</div>
      ))}
    </div>
  )
}

export default MessageList
