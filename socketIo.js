import io from 'socket.io-client'

const ENDPOINT = 'http://04b1a0099e05.ngrok.io'
// const ENDPOINT = 'https://votan-sparking.herokuapp.com/'
var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity",
  "timeout" : 10000,
  "transports" : ["websocket"]
};

let socket = io(ENDPOINT, connectionOptions)

export default socket
