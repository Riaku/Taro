var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({}),
    new winston.transports.File({ filename: __dirname + '/irc.log', json:false, timestamp:false})
  ],
  exitOnError: false
});

module.exports = logger;