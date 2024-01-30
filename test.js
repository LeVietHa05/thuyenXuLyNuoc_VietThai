

//copy this to console 
function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function randomFloat(min, max, fixed = 2) {
    return min + (max - min) * Math.random().toFixed(fixed);
}

setInterval(() => {
    socket.emit("/esp/envir", {
        clientID: "esp8266",
        temp: randomFloat(16,17),
        humi: randomInt(62,65),
        NH4: randomFloat(5, 10),
        co2: randomInt(100,120),
        co: randomInt(5,10),
        dust: {
            "PM10": randomFloat(40,50),
            "PM2.5": randomFloat(20,30),
        },
        tds: 0,
        ph: 0,
        windSpeed: randomFloat(0,1),
        flow: randomInt(0,0),
        tempDS18B20: 0,
        messageID: randomInt(0, 1000),
    })
}, 3000)