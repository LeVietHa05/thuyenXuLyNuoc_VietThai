
//emit socket event "esp/envir" every 3 seconds
let id = setInterval(() => {
    socket.emit("/esp/envir", {
        temp: Math.floor((Math.random()  + 26) * 100) / 100,
        humi: Math.floor((Math.random() * 3 + 50) * 100) / 100,
        co2: Math.floor((Math.random() * 5 + 400) * 100) / 100,
        co: Math.floor((Math.random() * 5 + 20) * 100) / 100,
        dust: Math.floor((Math.random() * 5 + 10) * 100) / 100,
        NH4: Math.floor((Math.random() * 5 + 15) * 100) / 100,
        tempDS18B20: Math.floor((Math.random()  + 24) * 100) / 100,
        ph: Math.floor((Math.random() + 7) * 100) / 100,
        tds: Math.floor((Math.random() * 2 + 453) * 100) / 100,
        windSpeed: Math.floor((Math.random() * 2 + 4) * 100) / 100,
        flow: 0,
        waterLevel: Math.floor((Math.random() + 10) * 100) / 100,
    })
}, 3000)

