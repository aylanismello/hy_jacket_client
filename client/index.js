const io = require('socket.io-client');
const ss = require('socket.io-stream');
const fs = require('fs');
const HEROKU_DROPLET_URL = 'http://162.243.144.110';
const url = process.env.NODE_ENV === 'production' ? HEROKU_DROPLET_URL : 'http://localhost:3000';

const socket = io.connect(url, {reconnect: true});

socket.on('connect', () => {
  console.log('connected!');

  ss(socket).on('audio', function(audioStream, data) {
    console.log('got audio from server!');

    // THIS IS THE OLD WORKINGCODE
    audioStream.pipe(fs.createWriteStream('./yo.wav'));
  });
});

socket.on('tick', (data) => {
  // console.log('do light stuffz!');
  console.log(data);
});
