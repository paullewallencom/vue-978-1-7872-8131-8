var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

io.on('connection', function (socket) {
    socket.on('enterRoom', function (room) {
        socket.join(room);
    });

    socket.on('leaveRoom', function (room) {
        socket.leave(room);
    });

    socket.on('newMessage', function (message) {
        Object.keys(socket.rooms).forEach(function (room) {
            if(room === socket.id) {
                return;
            }

            io.sockets.in(room).emit('newMessage', message);
        });
    });
});

http.listen(port, function () {
    console.log('Listening on *:' + port);
});