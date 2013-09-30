var file = require('./fileAccess');
var main = {};

main = function(){
    client.addListener('message', function (from, to, message) {
        var data = {};
        data.from = from;
        data.to = to;
        data.message = message;
        if(message.charAt(0) != "!"){
            log(data);
        }
    });
};

main.commandLog = function (data){
    fs.appendFile("./logs/"+data.to+'_commands.log', data.message, function (err) {
        if(err) throw err.stack;
    });
};
function log(data){
    fs.appendFile("./logs/"+data.to+'_chat.log', data.message+"\\n", function (err) {
        if(err) throw err;
    });
}
module.exports = main;