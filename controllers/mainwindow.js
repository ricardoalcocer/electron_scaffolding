'use strict'

module.exports = function() {
    const { app }           = require('electron')
    const path              = require('path')
    const window            = require('electron-window')
    const winPath           = path.resolve(__dirname,'..','views',process.platform,'mainwindow.html');
    // impersonate a Windows computer
    //const winPath           = path.resolve(__dirname,'..','views','win32','mainwindow.html');
    const ipcMain           = require('electron').ipcMain;

    // to instantiate and use a user-defined lib
    const tools             = require("../lib/sharedlib.js"); // a library of app-wide funtions
    console.log(tools.toUpperCase({msg:'hello'})); // testing the library (look at the console)

    var winArgs             = ''; // declaring in case I use it
    let mainWindow;

    //process.env.NODE_ENV = 'production';
    //process.env.NODE_ENV = 'development';

    // app is ready
    app.on('ready', () => {
        mainWindow  = window.createWindow({
            width: 500,
            height: 330,
            resizable: true,
            maximizable: true,
            minimizable: true,
            titleBarStyle: (process.platform == 'darwin'?'hidden':'default'),
            webPreferences: {
                nodeIntegration: true // to allow screen to screen communication
            },
            icon: path.join(__dirname, '../assets/icons/png/64x64.png')
        })

        mainWindow.on       ('close', function () { doQuit(); });
        mainWindow.on       ('closed', function() { mainWindow = null; });
        mainWindow.showUrl  (winPath, winArgs, () => { console.log('window is now visible!'); })
    })

    // set window Menu
    require('../menus/mainwindow');

    // all windows have been closed
    app.on('window-all-closed', () => {    // On OSX, quit when all windows are closed.
      if (process.platform != 'darwin') {
        app.quit();
      }
    });

    // ####################################################################################
    // utility functions
    // ####################################################################################

    // quit app
    function doQuit(){
        try {
            //
        }catch(e){
            //
        }
        app.quit();
    }

    // ####################################################################################
    // IPC bindings
    // ####################################################################################

    ipcMain.on('buttonclick', function (event, arg) {
      mainWindow.webContents.send('buttonclick', arg)
    })

    ipcMain.on('synMessage', (event, args) => {
     event.returnValue = 'You sent: ' + args + '.\n Main said: I received your Sync message.';
    });

    // ####################################################################################

}
