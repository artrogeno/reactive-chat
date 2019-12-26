import socketIO from 'socket.io'

const PORT = 5000
const io = socketIO(PORT)

io.on('connection', socket => {
  console.log('Connection stablished!')
  socket.on('newChatmessage', data => {
    io.emit('newChatmessage', data)
  })
  socket.on('disconnect', () => {
    console.log('Disconnected!')
  })
})
console.log(`Server listening on PORT ${PORT}`)
