
var irc = require('irc');
var logger = require('./log.js');
var server = 'irc.esper.net';
var port = 6667;
var nick = 'Taro';
var channels = ['#Taro'];

var client = new irc.Client(server, nick, 
{
    channels: channels,
    port: port,
});

client.addListener('message', function (from, to, message) 
{
    logger.info(from + ' => ' + to + ': ' + message);
});

client.addListener('error', function(message) 
{
    console.log('error: ', message);
});