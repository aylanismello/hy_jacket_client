var io = require('socket.io-client');
const HEROKU_DROPLET_URL = 'http://162.243.144.110';
const url = process.env.NODE_ENV === 'production' ? HEROKU_DROPLET_URL : 'http://localhost:3000';

var socket = io.connect(url, {reconnect: true});

socket.on('connect', () => {
  console.log('connected!');
});

socket.on('tick', (data) => {
  console.log('do light stuffz!');
  console.log(data);
});
