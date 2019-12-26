import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const Messages = ({ messages }) => {
  return (
    <List>
      {messages
        .flatMap((message, i) => [
          <ListItem alignItems="flex-start" key={i}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={message} />
          </ListItem>,
          <Divider component="li" key={`divider-${i}`} variant="inset" />,
        ])
        .slice(0, -1)}
    </List>
  )
}

export default Messages
