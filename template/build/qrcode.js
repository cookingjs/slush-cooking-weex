var qrcode = require('qrcode-terminal');
var ip = require('ip').address();
var weexFile = 'http://' + ip + ':8888' + '/weex.js';

qrcode.generate(weexFile, { small: true });
console.log(weexFile, '\n');
