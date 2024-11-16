import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './utils.js';
import { getPreloadPath } from './pathResolver.js';

const createWindow = async () => {
    let mainWin: BrowserWindow | null = new BrowserWindow({
        width: 1400,
        height: 1200,
        webPreferences: {
            nodeIntegration: true,
            preload: getPreloadPath()
        }
    })

    const startURL = isDev()
        ? 'http://localhost:5173'
        : `file://${path.join(__dirname, '../build/index.html')}`


    if (isDev()) {
        mainWin.webContents.openDevTools();
    }

    mainWin.loadURL(startURL);
    mainWin.on('closed', () => mainWin = null)
}

app.on('ready', () => {
    createWindow();
})