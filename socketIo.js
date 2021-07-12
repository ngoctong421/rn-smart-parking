import io from 'socket.io-client'

const ENDPOINT = 'http://800c22876f35.ngrok.io'
// const ENDPOINT = 'https://votan-sparking.herokuapp.com/'
var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity",
  "timeout" : 10000,
  "transports" : ["websocket"]
};

let socket = io(ENDPOINT, connectionOptions)

export default socket
