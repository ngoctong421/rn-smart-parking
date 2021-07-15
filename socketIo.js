import io from 'socket.io-client'

const ENDPOINT = 'http://5087f6c1fb81.ngrok.io'
// const ENDPOINT = 'https://votan-sparking.herokuapp.com/'
var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity",
  "timeout" : 10000,
  "transports" : ["websocket"]
};

let socket = io(ENDPOINT, connectionOptions)

export default socket
