const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = async () => {
    const isDev = (await import('electron-is-dev')).default;
    
    let mainWin = new BrowserWindow({
        width: 1400,
        height: 1200,
        webPreferences: {
            nodeIntegration: true
        }
    })

    const startURL = isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`

    // if (isDev) {
    //     mainWin.webContents.openDevTools();
    // }

    mainWin.webContents.openDevTools();

    mainWin.loadURL(startURL);
    mainWin.on('closed', () => mainWin = null)
}


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});