var main = {};
var holder = {};
var client = global.client;
var kick = require('../commands/kick');
setInterval(function() {clearUsers()}, 1000 );

main = function(){
    client.addListener('message', function (from, to, message) {
        holder[to] = {};
        if(holder[to][from]){
            holder[to][from]++;
        }else{
            holder[from] = 1;
        }
    });
    client.addListener('pm', function (from, message) {
        holder.pm = {};
        if(holder.pm[from]){
            holder.pm[from]++;
        }else{
            holder[to][from] = 1;
        }
    });
};

function clearUsers(){
    var x = 0;
    var keys = Object.keys(holder);

    while(x < keys.length){
        y = 0;
        var lvl2 = Obkect.keys(holder[2])
        while(y < lvl2.length){
            if(holder[x][y] > 5){
                var msg = {"to":x,"from":"__SERVER","message":y+"you are spamming"};
                kick(msg);
                console.log("kicked "+y);
            }
            y++;
        }
        x++;
    }
}

module.exports = main;