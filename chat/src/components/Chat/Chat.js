import React from 'react'

import { useChat } from '@hooks/core'
import MessageBox from '@components/MessageBox'
import Messages from '@components/Messages'

const Chat = () => {
  const { messages, sendMessages } = useChat()

  return (
    <div>
      <Messages messages={messages} />
      <MessageBox onSendMessage={message => sendMessages({ message })} />
    </div>
  )
}

export default Chat

// import Button from '@material-ui/core/Button'

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   )
// }

// import socketIOClient from 'socket.io-client'

// const socket = socketIOClient('http://localhost:5000/')

// socket.on('connect', () => {
//   socket.send('Hey')

//   socket.on('message', msg => {
//     // msg
//   })
// })
