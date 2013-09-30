var irc = require('irc');
var cfg = require('./config.json');
var log = require('./scripts/logger');

console.log(cfg);
global.client = new irc.Client(cfg.server, cfg.name, {
    channels: cfg.channels,
    port: cfg.port,
    userName: cfg.name,
    floodProtection: false,
    floodProtectionDelay: 500
});
var router = require('./router');

router();
log();

process.on('uncaughtException', function(err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});
global.client.addListener('error', function(message) {
    console.log('error: ', message);
});