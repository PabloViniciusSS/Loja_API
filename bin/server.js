const app = require('../src/app')
const http = require('http')
const debug = require('debug')('balta:server')

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
console.log('Api rodando na porta ' + port)

function onError(error) {
    if (erro.syscall !== 'listen') {
        throw Error
    }

    const bind = typeof port === 'string' ? 
        'Pipe ' + port :
        'Port ' + port

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break;
        default:
            throw Error
    }
}

function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if(port >= 0) {
        return port
    }
    return false
}

function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string' ?
        'Pipe ' + addr : 
        'port '  + addr.port
    debug('listening on ' + bind)

}