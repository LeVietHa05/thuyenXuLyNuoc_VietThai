

//copy this to console 
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

setInterval(() => {
    socket.emit("/esp/envir", {
        clientID: "esp8266",
        temp: randomInt(23, 28),
        humi: randomInt(50, 60),
        NH4: randomInt(50, 100),
        co2: randomInt(500, 1000),
        co: randomInt(0, 50),
        dust: randomInt(0, 10),
        tds: randomInt(0, 100),
        ph: randomInt(0, 14),
        windSpeed: randomInt(0, 10),
        flow: randomInt(0, 10),
        waterLevel: randomInt(0, 10),
        tempDS18B20: randomInt(23, 28),
    })
}, 3000)