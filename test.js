

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
        temp: randomFloat(17, 19),
        humi: randomInt(65,70),
        NH3: randomFloat(5, 10),
        co2: randomInt(300, 400),
        co: randomInt(50, 100),
        dust: {
            "PM10": randomFloat(50, 55),
            "PM2.5": randomFloat(30, 35),
        },
        tds: 0,
        ph: 0,
        windSpeed: randomInt(0, 10),
        flow: randomInt(0, 10),
        tempDS18B20: 0,
    })
}, 3000)