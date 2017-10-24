var io = require('socket.io-client');
const url = process.env.NODE_ENV === 'production' ? 'http://104.236.137.60' : 'http://localhost:3000';

var socket = io.connect(url, {reconnect: true});

socket.on('connect', () => {
  console.log('connected!');
});

socket.on('tick', (data) => {
  console.log('do light stuffz!');
  console.log(data);
});
