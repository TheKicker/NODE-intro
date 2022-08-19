const EventEmitter = require('events')

const emitter = new EventEmitter()

// Register a listener
emitter.on('messageLogged', (arg) => {
    console.log("A new message has been logged: ", arg)
})

// Raised an event called 'messageLogged'
emitter.emit('messageLogged', { id: 1, url:'https://github.com', code:'Node.js', threatLevel:'MIDNIGHT'})

