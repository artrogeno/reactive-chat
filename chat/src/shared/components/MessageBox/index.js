import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const MessageBox = ({ onSendMessage: pushSendMessage }) => {
  const [message, setMessage] = useState('')

  const inputKeyEvent = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      pushSendMessage(message)
      setMessage('')
    }
  }

  return (
    <TextField
      label="Message"
      margin="normal"
      multiline
      rows="4"
      fullWidth
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyDown={inputKeyEvent}
    />
  )
}

export default MessageBox
