const fs = require('fs');
const net = require('net');

//command line arguments: file to watch and port number
const filename = process.argv[2];
const port = process.argv[3];
var id = 1;

var server = net.createServer(function (connection) {

    //what to do on connect
    let clientId = id++;
    console.log("Subscriber " + clientId + " connected");
    connection.write("Client"+ clientId+ " Now watching " + filename +
        " for changes\n");

    var watcher = fs.watch(filename, function () {
        connection.write("Client" + clientId + " File " + filename +
            " has changed: " + Date.now() + "\n");
    });

    //what to do on disconnect
    connection.on('close', function () {
        console.log("Client"+clientId+" Subscriber disconnected");
        watcher.close();
    });
});

server.listen(port, function () {
    console.log("Listening to subscribers...");
});