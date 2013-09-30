fs = require('fs');

var main = {};
main.loadFile = function (){
    var config;
    fs.readFile('config.json', function (err, data) {
        if (err) throw err;
        console.log(data);
        config = JSON.parse(data.toString());
    });
    return config;
};
main.saveFile = function(name,data){
    fs.writeFile(name, data, function (err) {
        if (err) throw err;
        console.log('Configuration saved!');
    });

};
main.loadCommandList = function(){
    fs.readdir("./commands", function (err, files) {
        if (err) throw err;
        console.log("commands: " + files);
    });
};

main.exists = function(file){
    fs.exists(file, function (exists) {
        return exists;
    });
};
main.appendFile = function(name, data){
    fs.appendFile(name, data, function (err) {
        if (err) throw err;
    });
};
module.exports = main;