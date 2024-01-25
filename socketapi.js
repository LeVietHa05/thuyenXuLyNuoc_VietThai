const io = require("socket.io")();

const socketapi = {
    io: io
}

const messageID = [];

io.on("connection", (socket) => {
    console.log("[INFO] new connection: [" + socket.id + "]",
        socket.request.connection.remoteAddress);
    socket.on("/esp/envir", (data) => {
        console.log(`[/esp/envir] from ${data.clientID} via socket id: ${socket.id}`);
        //add check messageID, if messageID is exist, don't send to web
        if (messageID.indexOf(data.messageID) == -1) {
            messageID.push(data.messageID);
            socket.broadcast.emit("/web/envir", data);
            setTimeout(() => {
                messageID.splice(messageID.indexOf(data.messageID), 1);
            }, 10000);
        }
    });

    socket.on("/esp/other", (data) => {
        console.log(`[esp/other] from ${data.clientID} via socket id: ${socket.id}`);
        socket.broadcast.emit("/web/other", data);
    });

    socket.on("/web/control", (data) => {
        console.log(`[/web/control] from ${data.clientID} via socket id: ${socket.id}`);
        // console.log(data);
        let newData = "";
        for (let val in data) {
            newData += data[val];
            newData += ",";
        }
        console.log(newData);
        socket.broadcast.emit("/esp/control", newData);
    })
    /**************************** */
    //xu ly chung
    socket.on("reconnect", function () {
        console.log("[" + socket.id + "] reconnect.");
    });
    socket.on("disconnect", () => {
        console.log("[" + socket.id + "] disconnect.");
    });
    socket.on("connect_error", (err) => {
        console.log(err.stack);
    });
})

module.exports = socketapi;
