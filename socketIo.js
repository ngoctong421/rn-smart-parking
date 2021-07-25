import io from 'socket.io-client'

const ENDPOINT = 'http://sparking-env.eba-3qp6imve.us-east-2.elasticbeanstalk.com/'
// const ENDPOINT = 'https://votan-sparking.herokuapp.com/'
var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity",
  "timeout" : 10000,
  "transports" : ["websocket"]
};

let socket = io(ENDPOINT, connectionOptions)

export default socket
