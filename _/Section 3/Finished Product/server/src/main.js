var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', function (socket) {
    socket.on('enterRoom', function (room) {
        socket.join(room);
    });
    socket.on('leaveRoom', function (room) {
        socket.leave(room);
    });

    socket.on('message@create', function (msg) {
        Object.keys(socket.rooms).forEach(function (room) {
            if (room === socket.id) {
                return;
            }

            msg.time = new Date();

            io.sockets.in(room).emit('message@create', msg);
        });
    });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});