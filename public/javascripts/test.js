
//emit socket event "esp/envir" every 3 seconds
let id = setInterval(() => {
    socket.emit("/esp/envir", {
        temp: Math.floor((Math.random() + 22) * 100) / 100,
        humi: Math.floor((Math.random() * 3 + 50) * 100) / 100,
        co2: Math.floor((Math.random() * 5 + 700) * 100) / 100,
        co: Math.floor((Math.random() * 5 + 30) * 100) / 100,
        dust: Math.floor((Math.random() * 3 + 27) * 100) / 100,
        NH4: Math.floor((Math.random() * 5 + 25) * 100) / 100,
        tempDS18B20: Math.floor((Math.random() + 23) * 100) / 100,
        ph: Math.floor((Math.random() * 0.5 + 7) * 100) / 100,
        tds: Math.floor((Math.random() * 12 + 1532) * 100) / 100,
        windSpeed: Math.floor((Math.random() + 3) * 100) / 100,
        flow: 0,
        waterLevel: Math.floor((Math.random() + 10) * 100) / 100,
    })
}, 3000)

