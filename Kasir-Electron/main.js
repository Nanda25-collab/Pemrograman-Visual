const { app, BrowserWindow } = require("electron");
let wind;

const loadAppWindow = () => {
  wind = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  wind.loadFile("index.html");
};

app.on("ready", loadAppWindow);
