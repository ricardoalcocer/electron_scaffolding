# Electron Scaffolding

Empty Electron MVC-style project that provides a basic structure for native cross-platform desktop apps

![](http://drops.ricardoalcocer.com/drops/Screen%20Shot%202019-05-20%20at%202.02.24%20PM.png)

### Usage

1. Clone this repo by running `git clone git@github.com:ricardoalcocer/electron_scaffolding.git`
2. Install dependencies by running `npm install`
3. Start the project by running `npm start`
4. Package the app by running `npm run package-mac`

### Project structure

```
📁 assets
    📁 css
    📁 fonts
    📁 icons
        📁 darwin
            📄 icon.icns
        📁 png
            📄 16x16.png
            📄 1024x1024.png
        📁 win32
            📄 icon.ico
📁 bindings                         Code for view/controller binding
    📄 mainwindow.js
📁 controllers
    📄 mainwindow.js                Controller code
📁 lib                              Shared libraries
📁 menus
    📄 mainwindow.js                Menu files
📁 views
    📁 darwin                       HTML and CSS for App Windows
        📄 mainwindow.html          
        📄 mainwindow.css           
    📁 linux
        📄 mainwindow.html
        📄 mainwindow.css
    📁 win32
        📄 mainwindow.html
        📄 mainwindow.css
📄 .gitignore
📄 main.js                          Main bootstrap script
📄 package.json
📄 README.md
```

### TO DO

* Add Metro-UI-CSS to Windows view

## Useful tools

- [Put your app on the system tray](https://electronjs.org/docs/api/tray)
- [Generate App Icons](https://www.npmjs.com/package/electron-icon-maker)
- [Blog post about app Icons issues](https://medium.com/fantageek/changing-electron-app-icon-acf26906c5ad)
