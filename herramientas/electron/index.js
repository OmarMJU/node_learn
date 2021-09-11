const { app, BrowserWindow } = require("electron");

let mainWondow;

function creatreWindow() {
    mainWondow = new BrowserWindow({
        width: 1000,
        height: 800
    });

    mainWondow.loadFile("index.html");
}

app.on("ready", creatreWindow);