const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 650,
    webPreferences: {
      nodeIntegration: true, // to enable window.require and access main process from React components
      enableRemoteModule: true, // to allow access remote mode in react components
    },
    icon: `${__dirname}/note.png`,
    show: false,
    // frame: false, // to remove default menu bar
  });
  // mainWindow.setTitle('ToDOrganizer');
  // mainWindow.setTitle(require('../package.json').productName);
  const baseURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(baseURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  const djangoPath = isDev
    ? path.join(__dirname, "..", "dist-django", "backend", "backend.exe")
    : path.join(
        __dirname,
        "..",
        "..",
        "..",
        "dist-django",
        "backend",
        "backend.exe"
      );

  // const django = require('child_process').spawn('runserver --noreload', ["..\\dist-django\\backend\\backend.exe"]);
  //const django = require('child_process').spawn('python', ['manage.py', 'runserver']);
  const django = require("child_process").execFile(
    djangoPath,
    ["runserver", "--noreload"],
    (error, data) => console.log({ error, data })
  );
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
