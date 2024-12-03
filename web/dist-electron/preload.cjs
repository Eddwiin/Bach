"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electron', {
    doThing: () => electron_1.ipcRenderer.send('do-a-thing')
});
